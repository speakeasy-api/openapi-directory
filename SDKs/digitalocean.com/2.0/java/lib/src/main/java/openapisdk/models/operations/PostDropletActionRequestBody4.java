package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostDropletActionRequestBody4
 * Specifies the action that will be taken on the Droplet.
**/
public class PostDropletActionRequestBody4 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Object image;
    public PostDropletActionRequestBody4 withImage(Object image) {
        this.image = image;
        return this;
    }
    @JsonProperty("type")
    public PostDropletActionRequestBody4TypeEnum type;
    public PostDropletActionRequestBody4 withType(PostDropletActionRequestBody4TypeEnum type) {
        this.type = type;
        return this;
    }
}