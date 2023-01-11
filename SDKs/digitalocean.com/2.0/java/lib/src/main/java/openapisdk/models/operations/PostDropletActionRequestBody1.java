package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostDropletActionRequestBody1
 * Specifies the action that will be taken on the Droplet.
**/
public class PostDropletActionRequestBody1 {
    @JsonProperty("type")
    public PostDropletActionRequestBody1TypeEnum type;
    public PostDropletActionRequestBody1 withType(PostDropletActionRequestBody1TypeEnum type) {
        this.type = type;
        return this;
    }
}