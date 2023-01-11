import dataclasses
from enum import Enum

class PluginNameValueEnum(str, Enum):
    NO_PREFERENCE = "no-preference"
    TEST_DECODING = "test-decoding"
    PGLOGICAL = "pglogical"

