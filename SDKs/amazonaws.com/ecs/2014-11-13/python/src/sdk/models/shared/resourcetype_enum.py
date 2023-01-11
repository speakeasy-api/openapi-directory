import dataclasses
from enum import Enum

class ResourceTypeEnum(str, Enum):
    GPU = "GPU"
    INFERENCE_ACCELERATOR = "InferenceAccelerator"

