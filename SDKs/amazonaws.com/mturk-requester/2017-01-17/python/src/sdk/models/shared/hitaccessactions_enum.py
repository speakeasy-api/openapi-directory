import dataclasses
from enum import Enum

class HitAccessActionsEnum(str, Enum):
    ACCEPT = "Accept"
    PREVIEW_AND_ACCEPT = "PreviewAndAccept"
    DISCOVER_PREVIEW_AND_ACCEPT = "DiscoverPreviewAndAccept"

