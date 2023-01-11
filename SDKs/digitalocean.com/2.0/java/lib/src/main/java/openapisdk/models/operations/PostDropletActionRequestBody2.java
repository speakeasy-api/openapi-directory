package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostDropletActionRequestBody2
 * Specifies the action that will be taken on the Droplet.
**/
public class PostDropletActionRequestBody2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Long image;
    public PostDropletActionRequestBody2 withImage(Long image) {
        this.image = image;
        return this;
    }
    @JsonProperty("type")
    public PostDropletActionRequestBody2TypeEnum type;
    public PostDropletActionRequestBody2 withType(PostDropletActionRequestBody2TypeEnum type) {
        this.type = type;
        return this;
    }
}