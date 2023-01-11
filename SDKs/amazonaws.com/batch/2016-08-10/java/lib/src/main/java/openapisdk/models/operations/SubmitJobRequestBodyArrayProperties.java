package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmitJobRequestBodyArrayProperties
 * An object representing an Batch array job.
**/
public class SubmitJobRequestBodyArrayProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public SubmitJobRequestBodyArrayProperties withSize(Long size) {
        this.size = size;
        return this;
    }
}