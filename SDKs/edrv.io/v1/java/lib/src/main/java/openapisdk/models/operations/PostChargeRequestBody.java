package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostChargeRequestBody {
    @JsonProperty("action")
    public PostChargeRequestBodyActionEnum action;
    public PostChargeRequestBody withAction(PostChargeRequestBodyActionEnum action) {
        this.action = action;
        return this;
    }
}