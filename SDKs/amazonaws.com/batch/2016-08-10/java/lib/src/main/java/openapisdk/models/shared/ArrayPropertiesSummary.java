package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ArrayPropertiesSummary
 * An object representing the array properties of a job.
**/
public class ArrayPropertiesSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Long index;
    public ArrayPropertiesSummary withIndex(Long index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public ArrayPropertiesSummary withSize(Long size) {
        this.size = size;
        return this;
    }
}