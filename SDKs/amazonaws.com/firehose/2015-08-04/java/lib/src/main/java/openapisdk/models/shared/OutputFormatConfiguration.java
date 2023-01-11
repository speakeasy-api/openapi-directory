package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputFormatConfiguration
 * Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.
**/
public class OutputFormatConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Serializer")
    public Serializer serializer;
    public OutputFormatConfiguration withSerializer(Serializer serializer) {
        this.serializer = serializer;
        return this;
    }
}