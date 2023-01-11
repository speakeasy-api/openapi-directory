import dataclasses
from enum import Enum

class DkimSigningAttributesOriginEnum(str, Enum):
    AWS_SES = "AWS_SES"
    EXTERNAL = "EXTERNAL"

