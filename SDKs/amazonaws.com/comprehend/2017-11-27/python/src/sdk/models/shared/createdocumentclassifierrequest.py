import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentclassifierinputdataconfig as shared_documentclassifierinputdataconfig
from ..shared import languagecode_enum as shared_languagecode_enum
from ..shared import documentclassifiermode_enum as shared_documentclassifiermode_enum
from ..shared import documentclassifieroutputdataconfig as shared_documentclassifieroutputdataconfig
from ..shared import tag as shared_tag
from ..shared import vpcconfig as shared_vpcconfig


@dataclass_json
@dataclasses.dataclass
class CreateDocumentClassifierRequest:
    data_access_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    document_classifier_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentClassifierName') }})
    input_data_config: shared_documentclassifierinputdataconfig.DocumentClassifierInputDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    language_code: shared_languagecode_enum.LanguageCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    mode: Optional[shared_documentclassifiermode_enum.DocumentClassifierModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    model_kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelKmsKeyId') }})
    output_data_config: Optional[shared_documentclassifieroutputdataconfig.DocumentClassifierOutputDataConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    volume_kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeKmsKeyId') }})
    vpc_config: Optional[shared_vpcconfig.VpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
