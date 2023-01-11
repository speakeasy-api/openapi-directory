import dataclasses
from enum import Enum

class LocationFilterNameEnum(str, Enum):
    LOCATION_URI = "LocationUri"
    LOCATION_TYPE = "LocationType"
    CREATION_TIME = "CreationTime"

