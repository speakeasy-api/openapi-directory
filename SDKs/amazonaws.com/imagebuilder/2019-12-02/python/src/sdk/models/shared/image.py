import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerrecipe as shared_containerrecipe
from ..shared import distributionconfiguration as shared_distributionconfiguration
from ..shared import imagerecipe as shared_imagerecipe
from ..shared import imagetestsconfiguration as shared_imagetestsconfiguration
from ..shared import infrastructureconfiguration as shared_infrastructureconfiguration
from ..shared import outputresources as shared_outputresources
from ..shared import platform_enum as shared_platform_enum
from ..shared import imagestate as shared_imagestate
from ..shared import imagetype_enum as shared_imagetype_enum


@dataclass_json
@dataclasses.dataclass
class Image:
    r"""Image
    An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    container_recipe: Optional[shared_containerrecipe.ContainerRecipe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerRecipe') }})
    date_created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    distribution_configuration: Optional[shared_distributionconfiguration.DistributionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionConfiguration') }})
    enhanced_image_metadata_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enhancedImageMetadataEnabled') }})
    image_recipe: Optional[shared_imagerecipe.ImageRecipe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageRecipe') }})
    image_tests_configuration: Optional[shared_imagetestsconfiguration.ImageTestsConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTestsConfiguration') }})
    infrastructure_configuration: Optional[shared_infrastructureconfiguration.InfrastructureConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureConfiguration') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osVersion') }})
    output_resources: Optional[shared_outputresources.OutputResources] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputResources') }})
    platform: Optional[shared_platform_enum.PlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    source_pipeline_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePipelineArn') }})
    source_pipeline_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePipelineName') }})
    state: Optional[shared_imagestate.ImageState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[shared_imagetype_enum.ImageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
