import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class LocationUpdateStatusEnum(str, Enum):
    PENDING_UPDATE = "PENDING_UPDATE"

