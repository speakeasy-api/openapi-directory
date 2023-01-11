package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartMonitoringMemberRequestBody {
    @JsonProperty("AccountId")
    public String accountId;
    public StartMonitoringMemberRequestBody withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("GraphArn")
    public String graphArn;
    public StartMonitoringMemberRequestBody withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
}