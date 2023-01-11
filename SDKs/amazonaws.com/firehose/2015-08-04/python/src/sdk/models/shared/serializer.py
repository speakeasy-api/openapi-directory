import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orcserde as shared_orcserde
from ..shared import parquetserde as shared_parquetserde


@dataclass_json
@dataclasses.dataclass
class Serializer:
    r"""Serializer
    The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href=\"https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html\">ORC SerDe</a> and the <a href=\"https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html\">Parquet SerDe</a>.
    """
    
    orc_ser_de: Optional[shared_orcserde.OrcSerDe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrcSerDe') }})
    parquet_ser_de: Optional[shared_parquetserde.ParquetSerDe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParquetSerDe') }})
    
