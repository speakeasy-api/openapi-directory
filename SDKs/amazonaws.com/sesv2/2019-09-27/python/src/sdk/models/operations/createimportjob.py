import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataformat_enum as shared_dataformat_enum
from ..shared import contactlistdestination as shared_contactlistdestination
from ..shared import suppressionlistdestination as shared_suppressionlistdestination
from ..shared import createimportjobresponse as shared_createimportjobresponse


@dataclasses.dataclass
class CreateImportJobHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateImportJobRequestBodyImportDataSource:
    r"""CreateImportJobRequestBodyImportDataSource
    An object that contains details about the data source of the import job.
    """
    
    data_format: Optional[shared_dataformat_enum.DataFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    s3_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Url') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateImportJobRequestBodyImportDestination:
    r"""CreateImportJobRequestBodyImportDestination
    An object that contains details about the resource destination the import job is going to target.
    """
    
    contact_list_destination: Optional[shared_contactlistdestination.ContactListDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactListDestination') }})
    suppression_list_destination: Optional[shared_suppressionlistdestination.SuppressionListDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressionListDestination') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateImportJobRequestBody:
    import_data_source: CreateImportJobRequestBodyImportDataSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportDataSource') }})
    import_destination: CreateImportJobRequestBodyImportDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportDestination') }})
    

@dataclasses.dataclass
class CreateImportJobRequest:
    headers: CreateImportJobHeaders = dataclasses.field()
    request: CreateImportJobRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateImportJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    create_import_job_response: Optional[shared_createimportjobresponse.CreateImportJobResponse] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
