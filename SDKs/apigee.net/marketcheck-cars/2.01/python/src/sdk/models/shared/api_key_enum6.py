import dataclasses
from enum import Enum

class APIKeyEnum6(str, Enum):
    MAKE = "make"
    MODEL = "model"
    TRIM = "trim"
    CLASS = "class"
    TRANSMISSION = "transmission"
    FUEL_TYPE = "fuel_type"
    EXTERIOR_COLOR = "exterior_color"
    INTERIOR_COLOR = "interior_color"
    ENGINE = "engine"
    STATE = "state"
    CITY = "city"

