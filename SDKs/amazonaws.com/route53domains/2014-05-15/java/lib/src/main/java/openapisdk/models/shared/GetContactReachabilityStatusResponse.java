package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContactReachabilityStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public GetContactReachabilityStatusResponse withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ReachabilityStatusEnum status;
    public GetContactReachabilityStatusResponse withStatus(ReachabilityStatusEnum status) {
        this.status = status;
        return this;
    }
}