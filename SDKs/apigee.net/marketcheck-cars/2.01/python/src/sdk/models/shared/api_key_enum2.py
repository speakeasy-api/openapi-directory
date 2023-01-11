import dataclasses
from enum import Enum

class APIKeyEnum2(str, Enum):
    YMM = "ymm"
    MM = "mm"
    MAKE = "make"
    MODEL = "model"
    TRIM = "trim"
    BODY_TYPE = "body_type"
    BODY_SUBTYPE = "body_subtype"
    VEHICLE_TYPE = "vehicle_type"
    TRANSMISSION = "transmission"
    DRIVETRAIN = "drivetrain"
    FUEL_TYPE = "fuel_type"
    EXTERIOR_COLOR = "exterior_color"
    INTERIOR_COLOR = "interior_color"
    ENGINE = "engine"
    ENGINE_SIZE = "engine_size"
    ENGINE_BLOCK = "engine_block"
    STATE = "state"
    CITY = "city"

