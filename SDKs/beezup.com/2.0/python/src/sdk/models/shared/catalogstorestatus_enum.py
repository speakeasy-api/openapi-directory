import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class CatalogStoreStatusEnum(str, Enum):
    OK = "OK"
    FAILED = "Failed"
    OUTDATED = "Outdated"

