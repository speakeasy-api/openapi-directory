import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputformatconfiguration as shared_inputformatconfiguration
from ..shared import outputformatconfiguration as shared_outputformatconfiguration
from ..shared import schemaconfiguration as shared_schemaconfiguration


@dataclass_json
@dataclasses.dataclass
class DataFormatConversionConfiguration:
    r"""DataFormatConversionConfiguration
    Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href=\"https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html\">Kinesis Data Firehose Record Format Conversion</a>.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    input_format_configuration: Optional[shared_inputformatconfiguration.InputFormatConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputFormatConfiguration') }})
    output_format_configuration: Optional[shared_outputformatconfiguration.OutputFormatConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputFormatConfiguration') }})
    schema_configuration: Optional[shared_schemaconfiguration.SchemaConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaConfiguration') }})
    
