package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostDropletActionRequestBody5
 * Specifies the action that will be taken on the Droplet.
**/
public class PostDropletActionRequestBody5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PostDropletActionRequestBody5 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public PostDropletActionRequestBody5TypeEnum type;
    public PostDropletActionRequestBody5 withType(PostDropletActionRequestBody5TypeEnum type) {
        this.type = type;
        return this;
    }
}