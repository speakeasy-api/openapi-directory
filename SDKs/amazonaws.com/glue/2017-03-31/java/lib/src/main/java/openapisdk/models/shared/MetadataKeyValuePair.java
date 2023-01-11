package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetadataKeyValuePair
 * A structure containing a key value pair for metadata.
**/
public class MetadataKeyValuePair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetadataKey")
    public String metadataKey;
    public MetadataKeyValuePair withMetadataKey(String metadataKey) {
        this.metadataKey = metadataKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetadataValue")
    public String metadataValue;
    public MetadataKeyValuePair withMetadataValue(String metadataValue) {
        this.metadataValue = metadataValue;
        return this;
    }
}