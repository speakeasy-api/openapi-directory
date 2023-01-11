package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetadataHeader
 * Type that defines the metadata header fields.
**/
public class MetadataHeader {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public MetadataHeader withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataKeys")
    public Definition[] metadataKeys;
    public MetadataHeader withMetadataKeys(Definition[] metadataKeys) {
        this.metadataKeys = metadataKeys;
        return this;
    }
}