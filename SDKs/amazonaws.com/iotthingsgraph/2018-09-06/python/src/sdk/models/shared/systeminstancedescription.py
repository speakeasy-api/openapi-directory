import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import definitiondocument as shared_definitiondocument
from ..shared import metricsconfiguration as shared_metricsconfiguration
from ..shared import systeminstancesummary as shared_systeminstancesummary
from ..shared import dependencyrevision as shared_dependencyrevision


@dataclass_json
@dataclasses.dataclass
class SystemInstanceDescription:
    r"""SystemInstanceDescription
    An object that contains a system instance definition and summary information.
    """
    
    definition: Optional[shared_definitiondocument.DefinitionDocument] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    flow_actions_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowActionsRoleArn') }})
    metrics_configuration: Optional[shared_metricsconfiguration.MetricsConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricsConfiguration') }})
    s3_bucket_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3BucketName') }})
    summary: Optional[shared_systeminstancesummary.SystemInstanceSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    validated_dependency_revisions: Optional[list[shared_dependencyrevision.DependencyRevision]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedDependencyRevisions') }})
    validated_namespace_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedNamespaceVersion') }})
    
