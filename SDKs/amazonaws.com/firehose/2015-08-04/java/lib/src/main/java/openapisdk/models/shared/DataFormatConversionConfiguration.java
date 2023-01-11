package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataFormatConversionConfiguration
 * Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>.
**/
public class DataFormatConversionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public DataFormatConversionConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputFormatConfiguration")
    public InputFormatConfiguration inputFormatConfiguration;
    public DataFormatConversionConfiguration withInputFormatConfiguration(InputFormatConfiguration inputFormatConfiguration) {
        this.inputFormatConfiguration = inputFormatConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputFormatConfiguration")
    public OutputFormatConfiguration outputFormatConfiguration;
    public DataFormatConversionConfiguration withOutputFormatConfiguration(OutputFormatConfiguration outputFormatConfiguration) {
        this.outputFormatConfiguration = outputFormatConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaConfiguration")
    public SchemaConfiguration schemaConfiguration;
    public DataFormatConversionConfiguration withSchemaConfiguration(SchemaConfiguration schemaConfiguration) {
        this.schemaConfiguration = schemaConfiguration;
        return this;
    }
}