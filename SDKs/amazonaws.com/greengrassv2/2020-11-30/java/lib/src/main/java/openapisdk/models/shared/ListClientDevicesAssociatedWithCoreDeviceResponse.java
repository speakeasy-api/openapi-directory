package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListClientDevicesAssociatedWithCoreDeviceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedClientDevices")
    public AssociatedClientDevice[] associatedClientDevices;
    public ListClientDevicesAssociatedWithCoreDeviceResponse withAssociatedClientDevices(AssociatedClientDevice[] associatedClientDevices) {
        this.associatedClientDevices = associatedClientDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListClientDevicesAssociatedWithCoreDeviceResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}