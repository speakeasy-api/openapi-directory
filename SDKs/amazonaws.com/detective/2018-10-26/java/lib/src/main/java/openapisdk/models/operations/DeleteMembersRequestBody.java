package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteMembersRequestBody {
    @JsonProperty("AccountIds")
    public String[] accountIds;
    public DeleteMembersRequestBody withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonProperty("GraphArn")
    public String graphArn;
    public DeleteMembersRequestBody withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
}