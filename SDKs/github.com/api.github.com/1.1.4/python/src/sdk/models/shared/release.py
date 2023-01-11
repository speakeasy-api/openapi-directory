import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import release_asset as shared_release_asset
from ..shared import simple_user as shared_simple_user


@dataclass_json
@dataclasses.dataclass
class Release:
    r"""Release
    A release.
    """
    
    assets: list[shared_release_asset.ReleaseAsset] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets_url') }})
    author: shared_simple_user.SimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    draft: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    prerelease: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prerelease') }})
    published_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tag_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag_name') }})
    tarball_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tarball_url') }})
    target_commitish: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_commitish') }})
    upload_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_url') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    zipball_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zipball_url') }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    body_html: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_html') }})
    body_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_text') }})
    
