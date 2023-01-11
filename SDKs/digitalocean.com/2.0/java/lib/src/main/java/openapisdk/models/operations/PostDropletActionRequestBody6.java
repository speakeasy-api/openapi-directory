package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostDropletActionRequestBody6
 * Specifies the action that will be taken on the Droplet.
**/
public class PostDropletActionRequestBody6 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kernel")
    public Long kernel;
    public PostDropletActionRequestBody6 withKernel(Long kernel) {
        this.kernel = kernel;
        return this;
    }
    @JsonProperty("type")
    public PostDropletActionRequestBody6TypeEnum type;
    public PostDropletActionRequestBody6 withType(PostDropletActionRequestBody6TypeEnum type) {
        this.type = type;
        return this;
    }
}