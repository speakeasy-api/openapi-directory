import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import additionalartifact_enum as shared_additionalartifact_enum
from ..shared import schemaelement_enum as shared_schemaelement_enum
from ..shared import compressionformat_enum as shared_compressionformat_enum
from ..shared import reportformat_enum as shared_reportformat_enum
from ..shared import reportversioning_enum as shared_reportversioning_enum
from ..shared import awsregion_enum as shared_awsregion_enum
from ..shared import timeunit_enum as shared_timeunit_enum


@dataclass_json
@dataclasses.dataclass
class ReportDefinition:
    r"""ReportDefinition
    The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. 
    """
    
    additional_schema_elements: list[shared_schemaelement_enum.SchemaElementEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalSchemaElements') }})
    compression: shared_compressionformat_enum.CompressionFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compression') }})
    format: shared_reportformat_enum.ReportFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    report_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportName') }})
    s3_bucket: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    s3_prefix: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Prefix') }})
    s3_region: shared_awsregion_enum.AwsRegionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Region') }})
    time_unit: shared_timeunit_enum.TimeUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeUnit') }})
    additional_artifacts: Optional[list[shared_additionalartifact_enum.AdditionalArtifactEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalArtifacts') }})
    billing_view_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingViewArn') }})
    refresh_closed_reports: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshClosedReports') }})
    report_versioning: Optional[shared_reportversioning_enum.ReportVersioningEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportVersioning') }})
    
