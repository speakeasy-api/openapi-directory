import dataclasses
from enum import Enum

class LicenseSourcesEnum(str, Enum):
    ORDER = "order"
    TRIAL = "trial"
    VOUCHER = "voucher"
    DISTRIBUTOR = "distributor"
    SUBSCRIPTION = "subscription"
    APP_STORE = "appStore"

