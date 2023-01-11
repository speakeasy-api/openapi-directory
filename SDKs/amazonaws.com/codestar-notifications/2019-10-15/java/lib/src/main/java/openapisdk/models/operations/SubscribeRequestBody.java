package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscribeRequestBody {
    @JsonProperty("Arn")
    public String arn;
    public SubscribeRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public SubscribeRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("Target")
    public SubscribeRequestBodyTarget target;
    public SubscribeRequestBody withTarget(SubscribeRequestBodyTarget target) {
        this.target = target;
        return this;
    }
}