import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowedpublishers as shared_allowedpublishers
from ..shared import codesigningpolicies as shared_codesigningpolicies


@dataclass_json
@dataclasses.dataclass
class CodeSigningConfig:
    r"""CodeSigningConfig
    Details about a <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html\">Code signing configuration</a>. 
    """
    
    allowed_publishers: shared_allowedpublishers.AllowedPublishers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedPublishers') }})
    code_signing_config_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningConfigArn') }})
    code_signing_config_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningConfigId') }})
    code_signing_policies: shared_codesigningpolicies.CodeSigningPolicies = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningPolicies') }})
    last_modified: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
