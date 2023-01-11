package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartBgpFailoverTestRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bgpPeers")
    public String[] bgpPeers;
    public StartBgpFailoverTestRequest withBgpPeers(String[] bgpPeers) {
        this.bgpPeers = bgpPeers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testDurationInMinutes")
    public Long testDurationInMinutes;
    public StartBgpFailoverTestRequest withTestDurationInMinutes(Long testDurationInMinutes) {
        this.testDurationInMinutes = testDurationInMinutes;
        return this;
    }
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public StartBgpFailoverTestRequest withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
}