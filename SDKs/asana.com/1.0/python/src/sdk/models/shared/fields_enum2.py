import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class FieldsEnum2(str, Enum):
    DUE_DATE = "due_date"
    CREATED_AT = "created_at"
    COMPLETED_AT = "completed_at"
    LIKES = "likes"
    MODIFIED_AT = "modified_at"

