import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import augmentedmanifestslistitem as shared_augmentedmanifestslistitem
from ..shared import documentclassifierdataformat_enum as shared_documentclassifierdataformat_enum


@dataclass_json
@dataclasses.dataclass
class DocumentClassifierInputDataConfig:
    r"""DocumentClassifierInputDataConfig
    <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p>
    """
    
    augmented_manifests: Optional[list[shared_augmentedmanifestslistitem.AugmentedManifestsListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AugmentedManifests') }})
    data_format: Optional[shared_documentclassifierdataformat_enum.DocumentClassifierDataFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    label_delimiter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelDelimiter') }})
    s3_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
