import dataclasses
from enum import Enum

class APIKeyEnum4(str, Enum):
    MAKE = "make"
    MODEL = "model"
    TRIM = "trim"
    BODY_TYPE = "body_type"
    TRANSMISSION = "transmission"
    DRIVETRAIN = "drivetrain"
    FUEL_TYPE = "fuel_type"
    EXTERIOR_COLOR = "exterior_color"
    INTERIOR_COLOR = "interior_color"
    ENGINE = "engine"
    CATEGORY = "category"
    SUB_CATEGORY = "sub_category"
    STATE = "state"
    CITY = "city"

