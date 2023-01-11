package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RejectInvitationRequestBody {
    @JsonProperty("GraphArn")
    public String graphArn;
    public RejectInvitationRequestBody withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
}