import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hivejsonserde as shared_hivejsonserde
from ..shared import openxjsonserde as shared_openxjsonserde


@dataclass_json
@dataclasses.dataclass
class Deserializer:
    r"""Deserializer
    The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href=\"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON\">Apache Hive JSON SerDe</a> and the <a href=\"https://github.com/rcongiu/Hive-JSON-Serde\">OpenX JSON SerDe</a>.
    """
    
    hive_json_ser_de: Optional[shared_hivejsonserde.HiveJSONSerDe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HiveJsonSerDe') }})
    open_x_json_ser_de: Optional[shared_openxjsonserde.OpenXJSONSerDe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenXJsonSerDe') }})
    
