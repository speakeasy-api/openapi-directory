import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class ExtensionConfigIntentAddMediaOptEnum(str, Enum):
    RESOLVE_MEDIA_DESTINATION = "resolveMediaDestination"
    CONFIRM = "confirm"


@dataclasses.dataclass
class ExtensionConfigIntentAddMedia:
    hdr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    opt: Optional[list[ExtensionConfigIntentAddMediaOptEnum]] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
class ExtensionConfigIntentPlayMediaOptEnum(str, Enum):
    RESOLVE_PLAY_SHUFFLED = "resolvePlayShuffled"
    RESOLVE_PLAYBACK_REPEAT_MODE = "resolvePlaybackRepeatMode"
    RESOLVE_PLAYBACK_QUEUE_LOCATION = "resolvePlaybackQueueLocation"
    RESOLVE_RESUME_PLAYBACK = "resolveResumePlayback"


@dataclasses.dataclass
class ExtensionConfigIntentPlayMedia:
    hdr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    opt: Optional[list[ExtensionConfigIntentPlayMediaOptEnum]] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
class ExtensionConfigIntentUpdateMediaAffinityOptEnum(str, Enum):
    RESOLVE_AFFINITY_TYPE = "resolveAffinityType"


@dataclasses.dataclass
class ExtensionConfigIntentUpdateMediaAffinity:
    hdr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    opt: Optional[list[ExtensionConfigIntentUpdateMediaAffinityOptEnum]] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ExtensionConfigIntent:
    play_media: ExtensionConfigIntentPlayMedia = dataclasses.field()
    add_media: Optional[ExtensionConfigIntentAddMedia] = dataclasses.field(default=None)
    hdr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    update_media_affinity: Optional[ExtensionConfigIntentUpdateMediaAffinity] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ExtensionConfigMediaQueuesPlayMedia:
    hdr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ExtensionConfigMediaQueuesUpdateActivity:
    hdr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ExtensionConfigMediaQueues:
    hdr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    play_media: Optional[ExtensionConfigMediaQueuesPlayMedia] = dataclasses.field(default=None)
    update_activity: Optional[ExtensionConfigMediaQueuesUpdateActivity] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ExtensionConfigMedia:
    queues: Optional[ExtensionConfigMediaQueues] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ExtensionConfig:
    intent: ExtensionConfigIntent = dataclasses.field()
    media: ExtensionConfigMedia = dataclasses.field()
    version: str = dataclasses.field()
    hdr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
