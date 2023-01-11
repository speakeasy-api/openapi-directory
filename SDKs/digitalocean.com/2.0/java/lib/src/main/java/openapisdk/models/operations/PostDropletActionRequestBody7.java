package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostDropletActionRequestBody7
 * Specifies the action that will be taken on the Droplet.
**/
public class PostDropletActionRequestBody7 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PostDropletActionRequestBody7 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public PostDropletActionRequestBody7TypeEnum type;
    public PostDropletActionRequestBody7 withType(PostDropletActionRequestBody7TypeEnum type) {
        this.type = type;
        return this;
    }
}