"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import importresourcetype_enum as shared_importresourcetype_enum
from ..shared import importstatus_enum as shared_importstatus_enum
from ..shared import mergestrategy_enum as shared_mergestrategy_enum
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ImportSummary:
    r"""Provides summary information about an import in an import list."""
    
    creation_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    imported_resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('importedResourceId'), 'exclude': lambda f: f is None }})  
    imported_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('importedResourceName'), 'exclude': lambda f: f is None }})  
    imported_resource_type: Optional[shared_importresourcetype_enum.ImportResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('importedResourceType'), 'exclude': lambda f: f is None }})  
    import_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('importId'), 'exclude': lambda f: f is None }})  
    import_status: Optional[shared_importstatus_enum.ImportStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('importStatus'), 'exclude': lambda f: f is None }})  
    last_updated_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    merge_strategy: Optional[shared_mergestrategy_enum.MergeStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('mergeStrategy'), 'exclude': lambda f: f is None }})  
    