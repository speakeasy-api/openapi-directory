package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchArrayProperties
 * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.
**/
public class BatchArrayProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Size")
    public Long size;
    public BatchArrayProperties withSize(Long size) {
        this.size = size;
        return this;
    }
}