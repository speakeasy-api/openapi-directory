import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class FieldsEnum(str, Enum):
    SYNDICATION_DATE = "syndication_date"
    DATE = "date"

