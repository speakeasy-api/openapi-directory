import dataclasses
from enum import Enum

class RoleEnum(str, Enum):
    USER = "user"
    TEACHER = "teacher"
    ADMIN = "admin"

