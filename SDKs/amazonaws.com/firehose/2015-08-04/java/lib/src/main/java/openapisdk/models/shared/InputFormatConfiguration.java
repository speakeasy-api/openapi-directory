package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputFormatConfiguration
 * Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true.
**/
public class InputFormatConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Deserializer")
    public Deserializer deserializer;
    public InputFormatConfiguration withDeserializer(Deserializer deserializer) {
        this.deserializer = deserializer;
        return this;
    }
}