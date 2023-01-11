package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceArnDetail
 * A list of resources ARNs corresponding to the segments in a trace.
**/
public class ResourceArnDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ARN")
    public String arn;
    public ResourceArnDetail withArn(String arn) {
        this.arn = arn;
        return this;
    }
}