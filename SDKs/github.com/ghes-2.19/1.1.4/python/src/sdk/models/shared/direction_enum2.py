import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class DirectionEnum2(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    NAME = "name"

