package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVirtualInterfaceTestHistoryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bgpPeers")
    public String[] bgpPeers;
    public ListVirtualInterfaceTestHistoryRequest withBgpPeers(String[] bgpPeers) {
        this.bgpPeers = bgpPeers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListVirtualInterfaceTestHistoryRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListVirtualInterfaceTestHistoryRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ListVirtualInterfaceTestHistoryRequest withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testId")
    public String testId;
    public ListVirtualInterfaceTestHistoryRequest withTestId(String testId) {
        this.testId = testId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceId")
    public String virtualInterfaceId;
    public ListVirtualInterfaceTestHistoryRequest withVirtualInterfaceId(String virtualInterfaceId) {
        this.virtualInterfaceId = virtualInterfaceId;
        return this;
    }
}