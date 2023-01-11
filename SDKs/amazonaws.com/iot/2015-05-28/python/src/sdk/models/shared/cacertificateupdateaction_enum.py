import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class CaCertificateUpdateActionEnum(str, Enum):
    DEACTIVATE = "DEACTIVATE"

