import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsaccount as shared_awsaccount
from ..shared import assessmentframework as shared_assessmentframework
from ..shared import assessmentmetadata as shared_assessmentmetadata


@dataclass_json
@dataclasses.dataclass
class Assessment:
    r"""Assessment
     An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework. 
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    aws_account: Optional[shared_awsaccount.AwsAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccount') }})
    framework: Optional[shared_assessmentframework.AssessmentFramework] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('framework') }})
    metadata: Optional[shared_assessmentmetadata.AssessmentMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
