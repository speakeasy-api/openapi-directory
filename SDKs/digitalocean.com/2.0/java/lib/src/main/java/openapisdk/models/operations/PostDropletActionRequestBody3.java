package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostDropletActionRequestBody3
 * Specifies the action that will be taken on the Droplet.
**/
public class PostDropletActionRequestBody3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disk")
    public Boolean disk;
    public PostDropletActionRequestBody3 withDisk(Boolean disk) {
        this.disk = disk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public PostDropletActionRequestBody3 withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonProperty("type")
    public PostDropletActionRequestBody3TypeEnum type;
    public PostDropletActionRequestBody3 withType(PostDropletActionRequestBody3TypeEnum type) {
        this.type = type;
        return this;
    }
}