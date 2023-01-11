package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class AvailabilityRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closest")
@SpeakeasyMetadata("form:name=closest")
    public AvailabilityRequestClosestEnum closest;
    public AvailabilityRequest withClosest(AvailabilityRequestClosestEnum closest) {
        this.closest = closest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
@SpeakeasyMetadata("form:name=tag")
    public String tag;
    public AvailabilityRequest withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
@SpeakeasyMetadata("form:name=timestamp")
    public String timestamp;
    public AvailabilityRequest withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("url")
@SpeakeasyMetadata("form:name=url")
    public String url;
    public AvailabilityRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}