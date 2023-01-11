import dataclasses
from enum import Enum

class UserIdentityTypeEnum(str, Enum):
    ASSUMED_ROLE = "AssumedRole"
    IAM_USER = "IAMUser"
    FEDERATED_USER = "FederatedUser"
    ROOT = "Root"
    AWS_ACCOUNT = "AWSAccount"
    AWS_SERVICE = "AWSService"

