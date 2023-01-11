package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMembersRequestBody {
    @JsonProperty("AccountIds")
    public String[] accountIds;
    public GetMembersRequestBody withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonProperty("GraphArn")
    public String graphArn;
    public GetMembersRequestBody withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
}