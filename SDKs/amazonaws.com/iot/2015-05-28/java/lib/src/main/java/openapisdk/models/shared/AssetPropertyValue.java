package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetPropertyValue
 * An asset property value entry containing the following information.
**/
public class AssetPropertyValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality")
    public String quality;
    public AssetPropertyValue withQuality(String quality) {
        this.quality = quality;
        return this;
    }
    @JsonProperty("timestamp")
    public AssetPropertyTimestamp timestamp;
    public AssetPropertyValue withTimestamp(AssetPropertyTimestamp timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("value")
    public AssetPropertyVariant value;
    public AssetPropertyValue withValue(AssetPropertyVariant value) {
        this.value = value;
        return this;
    }
}