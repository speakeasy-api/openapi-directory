package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ArrayPropertiesDetail
 * An object representing the array properties of a job.
**/
public class ArrayPropertiesDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Long index;
    public ArrayPropertiesDetail withIndex(Long index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public ArrayPropertiesDetail withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusSummary")
    public java.util.Map<String, Long> statusSummary;
    public ArrayPropertiesDetail withStatusSummary(java.util.Map<String, Long> statusSummary) {
        this.statusSummary = statusSummary;
        return this;
    }
}