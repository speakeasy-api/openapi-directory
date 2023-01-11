package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AcceptInvitationRequestBody {
    @JsonProperty("GraphArn")
    public String graphArn;
    public AcceptInvitationRequestBody withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
}