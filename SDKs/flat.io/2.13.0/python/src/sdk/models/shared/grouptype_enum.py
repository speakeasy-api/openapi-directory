import dataclasses
from enum import Enum

class GroupTypeEnum(str, Enum):
    GENERIC = "generic"
    CLASS_TEACHERS = "classTeachers"
    CLASS_STUDENTS = "classStudents"

