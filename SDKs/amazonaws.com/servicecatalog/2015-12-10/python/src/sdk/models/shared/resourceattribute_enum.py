import dataclasses
from enum import Enum

class ResourceAttributeEnum(str, Enum):
    PROPERTIES = "PROPERTIES"
    METADATA = "METADATA"
    CREATIONPOLICY = "CREATIONPOLICY"
    UPDATEPOLICY = "UPDATEPOLICY"
    DELETIONPOLICY = "DELETIONPOLICY"
    TAGS = "TAGS"

