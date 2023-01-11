package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OtherMetadataValueListItem
 * A structure containing other metadata for a schema version belonging to the same metadata key.
**/
public class OtherMetadataValueListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedTime")
    public String createdTime;
    public OtherMetadataValueListItem withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetadataValue")
    public String metadataValue;
    public OtherMetadataValueListItem withMetadataValue(String metadataValue) {
        this.metadataValue = metadataValue;
        return this;
    }
}