package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetPropertyValue
 * Contains asset property value information.
**/
public class AssetPropertyValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality")
    public QualityEnum quality;
    public AssetPropertyValue withQuality(QualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonProperty("timestamp")
    public TimeInNanos timestamp;
    public AssetPropertyValue withTimestamp(TimeInNanos timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("value")
    public Variant value;
    public AssetPropertyValue withValue(Variant value) {
        this.value = value;
        return this;
    }
}