import dataclasses
from enum import Enum

class RootDeviceTypeEnum(str, Enum):
    EBS = "ebs"
    INSTANCE_STORE = "instance-store"

