import dataclasses
from enum import Enum

class OrganizationRolesEnum(str, Enum):
    ADMIN = "admin"
    BILLING = "billing"
    TEACHER = "teacher"
    USER = "user"

