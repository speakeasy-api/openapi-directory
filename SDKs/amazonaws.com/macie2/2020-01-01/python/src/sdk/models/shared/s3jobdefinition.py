import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3bucketcriteriaforjob as shared_s3bucketcriteriaforjob
from ..shared import s3bucketdefinitionforjob as shared_s3bucketdefinitionforjob
from ..shared import scoping as shared_scoping


@dataclass_json
@dataclasses.dataclass
class S3JobDefinition:
    r"""S3JobDefinition
    Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
    """
    
    bucket_criteria: Optional[shared_s3bucketcriteriaforjob.S3BucketCriteriaForJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCriteria') }})
    bucket_definitions: Optional[list[shared_s3bucketdefinitionforjob.S3BucketDefinitionForJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketDefinitions') }})
    scoping: Optional[shared_scoping.Scoping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoping') }})
    
