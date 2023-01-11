package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetProtectionStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdminAccountId")
    public String adminAccountId;
    public GetProtectionStatusResponse withAdminAccountId(String adminAccountId) {
        this.adminAccountId = adminAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public String data;
    public GetProtectionStatusResponse withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetProtectionStatusResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceType")
    public SecurityServiceTypeEnum serviceType;
    public GetProtectionStatusResponse withServiceType(SecurityServiceTypeEnum serviceType) {
        this.serviceType = serviceType;
        return this;
    }
}