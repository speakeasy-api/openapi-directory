import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localdeviceresourcedata as shared_localdeviceresourcedata
from ..shared import localvolumeresourcedata as shared_localvolumeresourcedata
from ..shared import s3machinelearningmodelresourcedata as shared_s3machinelearningmodelresourcedata
from ..shared import sagemakermachinelearningmodelresourcedata as shared_sagemakermachinelearningmodelresourcedata
from ..shared import secretsmanagersecretresourcedata as shared_secretsmanagersecretresourcedata


@dataclass_json
@dataclasses.dataclass
class ResourceDataContainer:
    r"""ResourceDataContainer
    A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
    """
    
    local_device_resource_data: Optional[shared_localdeviceresourcedata.LocalDeviceResourceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalDeviceResourceData') }})
    local_volume_resource_data: Optional[shared_localvolumeresourcedata.LocalVolumeResourceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalVolumeResourceData') }})
    s3_machine_learning_model_resource_data: Optional[shared_s3machinelearningmodelresourcedata.S3MachineLearningModelResourceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3MachineLearningModelResourceData') }})
    sage_maker_machine_learning_model_resource_data: Optional[shared_sagemakermachinelearningmodelresourcedata.SageMakerMachineLearningModelResourceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SageMakerMachineLearningModelResourceData') }})
    secrets_manager_secret_resource_data: Optional[shared_secretsmanagersecretresourcedata.SecretsManagerSecretResourceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretsManagerSecretResourceData') }})
    
