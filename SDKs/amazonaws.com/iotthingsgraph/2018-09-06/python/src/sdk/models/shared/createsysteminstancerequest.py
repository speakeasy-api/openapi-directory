import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import definitiondocument as shared_definitiondocument
from ..shared import metricsconfiguration as shared_metricsconfiguration
from ..shared import tag as shared_tag
from ..shared import deploymenttarget_enum as shared_deploymenttarget_enum


@dataclass_json
@dataclasses.dataclass
class CreateSystemInstanceRequest:
    definition: shared_definitiondocument.DefinitionDocument = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    target: shared_deploymenttarget_enum.DeploymentTargetEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    flow_actions_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowActionsRoleArn') }})
    greengrass_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greengrassGroupName') }})
    metrics_configuration: Optional[shared_metricsconfiguration.MetricsConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricsConfiguration') }})
    s3_bucket_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3BucketName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
