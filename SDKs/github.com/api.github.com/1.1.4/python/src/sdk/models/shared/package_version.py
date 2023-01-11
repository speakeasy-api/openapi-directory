import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PackageVersionPackageVersionMetadataContainerMetadata:
    tags: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class PackageVersionPackageVersionMetadataDockerMetadata:
    tag: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
class PackageVersionPackageVersionMetadataPackageTypeEnum(str, Enum):
    NPM = "npm"
    MAVEN = "maven"
    RUBYGEMS = "rubygems"
    DOCKER = "docker"
    NUGET = "nuget"
    CONTAINER = "container"


@dataclass_json
@dataclasses.dataclass
class PackageVersionPackageVersionMetadata:
    package_type: PackageVersionPackageVersionMetadataPackageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_type') }})
    container: Optional[PackageVersionPackageVersionMetadataContainerMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    docker: Optional[PackageVersionPackageVersionMetadataDockerMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('docker') }})
    

@dataclass_json
@dataclasses.dataclass
class PackageVersion:
    r"""PackageVersion
    A version of a software package
    """
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_html_url') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    deleted_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    html_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    license: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    metadata: Optional[PackageVersionPackageVersionMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
