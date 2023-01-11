package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetadataRecord
 * A complex type that defines the data records returned in the report.
**/
public class MetadataRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataValues")
    public Value[] metadataValues;
    public MetadataRecord withMetadataValues(Value[] metadataValues) {
        this.metadataValues = metadataValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Value value;
    public MetadataRecord withValue(Value value) {
        this.value = value;
        return this;
    }
}