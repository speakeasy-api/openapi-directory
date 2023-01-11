package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPermissionSetsProvisionedToAccountRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public ListPermissionSetsProvisionedToAccountRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public ListPermissionSetsProvisionedToAccountRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListPermissionSetsProvisionedToAccountRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPermissionSetsProvisionedToAccountRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningStatus")
    public ProvisioningStatusEnum provisioningStatus;
    public ListPermissionSetsProvisionedToAccountRequest withProvisioningStatus(ProvisioningStatusEnum provisioningStatus) {
        this.provisioningStatus = provisioningStatus;
        return this;
    }
}