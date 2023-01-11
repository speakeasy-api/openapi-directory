import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appflowconfig as shared_appflowconfig
from ..shared import cloudwatchconfig as shared_cloudwatchconfig
from ..shared import rdssourceconfig as shared_rdssourceconfig
from ..shared import redshiftsourceconfig as shared_redshiftsourceconfig
from ..shared import s3sourceconfig as shared_s3sourceconfig
from ..shared import metric as shared_metric
from ..shared import updatemetricsetresponse as shared_updatemetricsetresponse


@dataclasses.dataclass
class UpdateMetricSetHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateMetricSetRequestBodyMetricSetFrequencyEnum(str, Enum):
    P1_D = "P1D"
    PT1_H = "PT1H"
    PT10_M = "PT10M"
    PT5_M = "PT5M"


@dataclass_json
@dataclasses.dataclass
class UpdateMetricSetRequestBodyMetricSource:
    r"""UpdateMetricSetRequestBodyMetricSource
    Contains information about source data used to generate a metric.
    """
    
    app_flow_config: Optional[shared_appflowconfig.AppFlowConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppFlowConfig') }})
    cloud_watch_config: Optional[shared_cloudwatchconfig.CloudWatchConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchConfig') }})
    rds_source_config: Optional[shared_rdssourceconfig.RdsSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RDSSourceConfig') }})
    redshift_source_config: Optional[shared_redshiftsourceconfig.RedshiftSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftSourceConfig') }})
    s3_source_config: Optional[shared_s3sourceconfig.S3SourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3SourceConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMetricSetRequestBodyTimestampColumn:
    r"""UpdateMetricSetRequestBodyTimestampColumn
    Contains information about the column used to track time in a source data file.
    """
    
    column_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnFormat') }})
    column_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnName') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMetricSetRequestBody:
    metric_set_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetArn') }})
    dimension_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionList') }})
    metric_list: Optional[list[shared_metric.Metric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricList') }})
    metric_set_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetDescription') }})
    metric_set_frequency: Optional[UpdateMetricSetRequestBodyMetricSetFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetFrequency') }})
    metric_source: Optional[UpdateMetricSetRequestBodyMetricSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSource') }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Offset') }})
    timestamp_column: Optional[UpdateMetricSetRequestBodyTimestampColumn] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampColumn') }})
    

@dataclasses.dataclass
class UpdateMetricSetRequest:
    headers: UpdateMetricSetHeaders = dataclasses.field()
    request: UpdateMetricSetRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateMetricSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_metric_set_response: Optional[shared_updatemetricsetresponse.UpdateMetricSetResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
