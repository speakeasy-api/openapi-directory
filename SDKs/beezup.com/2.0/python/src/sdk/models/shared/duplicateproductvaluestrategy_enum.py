import dataclasses
from typing import Any
from enum import Enum

class DuplicateProductValueStrategyEnum(str, Enum):
    NONE = "None"
    SKIP_ALL_DUPLICATE_PRODUCTS = "SkipAllDuplicateProducts"
    KEEP_FIRST_DUPLICATE_PRODUCT_ONLY = "KeepFirstDuplicateProductOnly"
    FAIL_IMPORTATION_IF_ANY_DUPLICATE_PRODUCT = "FailImportationIfAnyDuplicateProduct"

