import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetaction as shared_datasetaction
from ..shared import datasetcontentdeliveryrule as shared_datasetcontentdeliveryrule
from ..shared import latedatarule as shared_latedatarule
from ..shared import tag as shared_tag
from ..shared import datasettrigger as shared_datasettrigger
from ..shared import createdatasetresponse as shared_createdatasetresponse


@dataclasses.dataclass
class CreateDatasetHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDatasetRequestBodyRetentionPeriod:
    r"""CreateDatasetRequestBodyRetentionPeriod
    How long, in days, message data is kept.
    """
    
    number_of_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfDays') }})
    unlimited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDatasetRequestBodyVersioningConfiguration:
    r"""CreateDatasetRequestBodyVersioningConfiguration
    Information about the versioning of dataset contents.
    """
    
    max_versions: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxVersions') }})
    unlimited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDatasetRequestBody:
    actions: list[shared_datasetaction.DatasetAction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    dataset_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetName') }})
    content_delivery_rules: Optional[list[shared_datasetcontentdeliveryrule.DatasetContentDeliveryRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDeliveryRules') }})
    late_data_rules: Optional[list[shared_latedatarule.LateDataRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lateDataRules') }})
    retention_period: Optional[CreateDatasetRequestBodyRetentionPeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionPeriod') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    triggers: Optional[list[shared_datasettrigger.DatasetTrigger]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    versioning_configuration: Optional[CreateDatasetRequestBodyVersioningConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioningConfiguration') }})
    

@dataclasses.dataclass
class CreateDatasetRequest:
    headers: CreateDatasetHeaders = dataclasses.field()
    request: CreateDatasetRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDatasetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_dataset_response: Optional[shared_createdatasetresponse.CreateDatasetResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
