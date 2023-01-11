import dataclasses
from enum import Enum

class TaskFilterNameEnum(str, Enum):
    LOCATION_ID = "LocationId"
    CREATION_TIME = "CreationTime"

