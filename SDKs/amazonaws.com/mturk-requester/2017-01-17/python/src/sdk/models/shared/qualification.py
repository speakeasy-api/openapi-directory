"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import locale as shared_locale
from ..shared import qualificationstatus_enum as shared_qualificationstatus_enum
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Qualification:
    r"""The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score)."""
    
    grant_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GrantTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    integer_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IntegerValue'), 'exclude': lambda f: f is None }})  
    locale_value: Optional[shared_locale.Locale] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LocaleValue'), 'exclude': lambda f: f is None }})
    r"""The Locale data structure represents a geographical region or location."""  
    qualification_type_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('QualificationTypeId'), 'exclude': lambda f: f is None }})  
    status: Optional[shared_qualificationstatus_enum.QualificationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Status'), 'exclude': lambda f: f is None }})  
    worker_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('WorkerId'), 'exclude': lambda f: f is None }})  
    