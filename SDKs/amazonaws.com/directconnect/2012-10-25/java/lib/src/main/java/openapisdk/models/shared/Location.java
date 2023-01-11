package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Location
 * Information about an Direct Connect location.
**/
public class Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableMacSecPortSpeeds")
    public String[] availableMacSecPortSpeeds;
    public Location withAvailableMacSecPortSpeeds(String[] availableMacSecPortSpeeds) {
        this.availableMacSecPortSpeeds = availableMacSecPortSpeeds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availablePortSpeeds")
    public String[] availablePortSpeeds;
    public Location withAvailablePortSpeeds(String[] availablePortSpeeds) {
        this.availablePortSpeeds = availablePortSpeeds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableProviders")
    public String[] availableProviders;
    public Location withAvailableProviders(String[] availableProviders) {
        this.availableProviders = availableProviders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationCode")
    public String locationCode;
    public Location withLocationCode(String locationCode) {
        this.locationCode = locationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationName")
    public String locationName;
    public Location withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public Location withRegion(String region) {
        this.region = region;
        return this;
    }
}