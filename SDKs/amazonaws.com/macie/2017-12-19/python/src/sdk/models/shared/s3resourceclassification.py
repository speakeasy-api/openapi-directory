import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classificationtype as shared_classificationtype


@dataclass_json
@dataclasses.dataclass
class S3ResourceClassification:
    r"""S3ResourceClassification
    The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the AssociateS3Resources action and a response parameter in the ListS3Resources action. 
    """
    
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    classification_type: shared_classificationtype.ClassificationType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationType') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    
