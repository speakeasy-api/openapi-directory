"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import linktype as shared_linktype
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AppPkgInfoLinks:
    r"""Links to resources related to this resource."""
    
    app_d: shared_linktype.LinkType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('appD') }})  
    app_pkg_content: shared_linktype.LinkType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('appPkgContent') }})  
    self_: shared_linktype.LinkType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('self') }})  
    