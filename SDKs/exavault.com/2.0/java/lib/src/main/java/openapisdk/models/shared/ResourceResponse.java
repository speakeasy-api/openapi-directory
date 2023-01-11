package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceResponse
 * Response object for resources.
**/
public class ResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Resource data;
    public ResourceResponse withData(Resource data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Object[] included;
    public ResourceResponse withIncluded(Object[] included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Long responseStatus;
    public ResourceResponse withResponseStatus(Long responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
}