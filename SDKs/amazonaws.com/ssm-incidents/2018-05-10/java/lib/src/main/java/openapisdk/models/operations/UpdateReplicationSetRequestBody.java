package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateReplicationSetRequestBody {
    @JsonProperty("actions")
    public openapisdk.models.shared.UpdateReplicationSetAction[] actions;
    public UpdateReplicationSetRequestBody withActions(openapisdk.models.shared.UpdateReplicationSetAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("arn")
    public String arn;
    public UpdateReplicationSetRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateReplicationSetRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}