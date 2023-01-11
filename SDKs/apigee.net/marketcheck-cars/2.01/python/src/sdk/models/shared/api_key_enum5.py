import dataclasses
from enum import Enum

class APIKeyEnum5(str, Enum):
    MAKE = "make"
    MODEL = "model"
    TRIM = "trim"
    BODY_TYPE = "body_type"
    VEHICLE_TYPE = "vehicle_type"
    TRANSMISSION = "transmission"
    DRIVETRAIN = "drivetrain"
    FUEL_TYPE = "fuel_type"
    COLOR = "color"
    ENGINE = "engine"
    STATE = "state"
    CITY = "city"

