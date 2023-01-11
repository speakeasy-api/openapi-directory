package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SerDeInfo
 * Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader.
**/
public class SerDeInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public SerDeInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String> parameters;
    public SerDeInfo withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SerializationLibrary")
    public String serializationLibrary;
    public SerDeInfo withSerializationLibrary(String serializationLibrary) {
        this.serializationLibrary = serializationLibrary;
        return this;
    }
}