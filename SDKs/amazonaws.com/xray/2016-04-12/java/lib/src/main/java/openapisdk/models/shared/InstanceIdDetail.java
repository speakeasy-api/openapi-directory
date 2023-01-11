package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceIdDetail
 * A list of EC2 instance IDs corresponding to the segments in a trace. 
**/
public class InstanceIdDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public InstanceIdDetail withId(String id) {
        this.id = id;
        return this;
    }
}