import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import source as shared_source
from ..shared import datasource as shared_datasource
from ..shared import environmentvariable as shared_environmentvariable
from ..shared import sslconfiguration as shared_sslconfiguration
from ..shared import apptype_enum as shared_apptype_enum


@dataclass_json
@dataclasses.dataclass
class CreateAppRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    stack_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    type: shared_apptype_enum.AppTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    app_source: Optional[shared_source.Source] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppSource') }})
    attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    data_sources: Optional[list[shared_datasource.DataSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSources') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domains') }})
    enable_ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableSsl') }})
    environment: Optional[list[shared_environmentvariable.EnvironmentVariable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    shortname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Shortname') }})
    ssl_configuration: Optional[shared_sslconfiguration.SslConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslConfiguration') }})
    
