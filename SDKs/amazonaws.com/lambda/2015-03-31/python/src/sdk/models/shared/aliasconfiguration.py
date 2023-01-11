import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aliasroutingconfiguration as shared_aliasroutingconfiguration


@dataclass_json
@dataclasses.dataclass
class AliasConfiguration:
    r"""AliasConfiguration
    Provides configuration information about a Lambda function <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html\">alias</a>.
    """
    
    alias_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasArn') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    function_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionVersion') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevisionId') }})
    routing_config: Optional[shared_aliasroutingconfiguration.AliasRoutingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingConfig') }})
    
