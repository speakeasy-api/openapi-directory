import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import engine_enum as shared_engine_enum
from ..shared import languagecode_enum as shared_languagecode_enum
from ..shared import outputformat_enum as shared_outputformat_enum
from ..shared import speechmarktype_enum as shared_speechmarktype_enum
from ..shared import taskstatus_enum as shared_taskstatus_enum
from ..shared import texttype_enum as shared_texttype_enum
from ..shared import voiceid_enum as shared_voiceid_enum


@dataclass_json
@dataclasses.dataclass
class SynthesisTask:
    r"""SynthesisTask
    SynthesisTask object that provides information about a speech synthesis task.
    """
    
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    engine: Optional[shared_engine_enum.EngineEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Engine') }})
    language_code: Optional[shared_languagecode_enum.LanguageCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    lexicon_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LexiconNames') }})
    output_format: Optional[shared_outputformat_enum.OutputFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputFormat') }})
    output_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputUri') }})
    request_characters: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestCharacters') }})
    sample_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleRate') }})
    sns_topic_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsTopicArn') }})
    speech_mark_types: Optional[list[shared_speechmarktype_enum.SpeechMarkTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpeechMarkTypes') }})
    task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskId') }})
    task_status: Optional[shared_taskstatus_enum.TaskStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskStatus') }})
    task_status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskStatusReason') }})
    text_type: Optional[shared_texttype_enum.TextTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextType') }})
    voice_id: Optional[shared_voiceid_enum.VoiceIDEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceId') }})
    
