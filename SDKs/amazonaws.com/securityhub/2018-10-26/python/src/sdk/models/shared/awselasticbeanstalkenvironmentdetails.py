import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awselasticbeanstalkenvironmentenvironmentlink as shared_awselasticbeanstalkenvironmentenvironmentlink
from ..shared import awselasticbeanstalkenvironmentoptionsetting as shared_awselasticbeanstalkenvironmentoptionsetting
from ..shared import awselasticbeanstalkenvironmenttier as shared_awselasticbeanstalkenvironmenttier


@dataclass_json
@dataclasses.dataclass
class AwsElasticBeanstalkEnvironmentDetails:
    r"""AwsElasticBeanstalkEnvironmentDetails
    Contains details about an Elastic Beanstalk environment.
    """
    
    application_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    cname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cname') }})
    date_created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateCreated') }})
    date_updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateUpdated') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    endpoint_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointUrl') }})
    environment_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentArn') }})
    environment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentId') }})
    environment_links: Optional[list[shared_awselasticbeanstalkenvironmentenvironmentlink.AwsElasticBeanstalkEnvironmentEnvironmentLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentLinks') }})
    environment_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentName') }})
    option_settings: Optional[list[shared_awselasticbeanstalkenvironmentoptionsetting.AwsElasticBeanstalkEnvironmentOptionSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptionSettings') }})
    platform_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlatformArn') }})
    solution_stack_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SolutionStackName') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    tier: Optional[shared_awselasticbeanstalkenvironmenttier.AwsElasticBeanstalkEnvironmentTier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    version_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionLabel') }})
    
