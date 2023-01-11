import dataclasses
from enum import Enum

class ActionTypeEnum(str, Enum):
    ISSUE_CERTIFICATE = "IssueCertificate"
    GET_CERTIFICATE = "GetCertificate"
    LIST_PERMISSIONS = "ListPermissions"

