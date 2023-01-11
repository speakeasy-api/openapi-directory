import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ec2amiresource as shared_ec2amiresource
from ..shared import lambdaresource as shared_lambdaresource
from ..shared import s3resource as shared_s3resource


@dataclass_json
@dataclasses.dataclass
class JobResource:
    r"""JobResource
    Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.
    """
    
    ec2_ami_resources: Optional[list[shared_ec2amiresource.Ec2AmiResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2AmiResources') }})
    lambda_resources: Optional[list[shared_lambdaresource.LambdaResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaResources') }})
    s3_resources: Optional[list[shared_s3resource.S3Resource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Resources') }})
    
