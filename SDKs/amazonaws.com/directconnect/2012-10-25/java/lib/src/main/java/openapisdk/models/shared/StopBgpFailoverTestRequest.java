package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopBgpFailoverTestRequest {
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public StopBgpFailoverTestRequest withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
}