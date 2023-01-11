import dataclasses
from enum import Enum

class VMManagerTypeEnum(str, Enum):
    VSPHERE = "VSPHERE"
    SCVMM = "SCVMM"
    HYPERV_MANAGER = "HYPERV-MANAGER"

