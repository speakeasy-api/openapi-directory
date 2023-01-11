package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCoreDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coreDevices")
    public CoreDevice[] coreDevices;
    public ListCoreDevicesResponse withCoreDevices(CoreDevice[] coreDevices) {
        this.coreDevices = coreDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListCoreDevicesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}