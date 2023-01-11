import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import augmentedmanifestsdocumenttypeformat_enum as shared_augmentedmanifestsdocumenttypeformat_enum


@dataclass_json
@dataclasses.dataclass
class AugmentedManifestsListItem:
    r"""AugmentedManifestsListItem
    An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
    """
    
    attribute_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeNames') }})
    s3_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    annotation_data_s3_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnotationDataS3Uri') }})
    document_type: Optional[shared_augmentedmanifestsdocumenttypeformat_enum.AugmentedManifestsDocumentTypeFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentType') }})
    source_documents_s3_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDocumentsS3Uri') }})
    
