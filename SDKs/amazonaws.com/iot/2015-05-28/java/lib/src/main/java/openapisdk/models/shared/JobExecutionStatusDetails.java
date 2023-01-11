package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobExecutionStatusDetails
 * Details of the job execution status.
**/
public class JobExecutionStatusDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailsMap")
    public java.util.Map<String, String> detailsMap;
    public JobExecutionStatusDetails withDetailsMap(java.util.Map<String, String> detailsMap) {
        this.detailsMap = detailsMap;
        return this;
    }
}