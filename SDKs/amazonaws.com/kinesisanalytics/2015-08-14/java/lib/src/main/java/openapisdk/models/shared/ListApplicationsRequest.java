package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListApplicationsRequest
 * <p/>
**/
public class ListApplicationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusiveStartApplicationName")
    public String exclusiveStartApplicationName;
    public ListApplicationsRequest withExclusiveStartApplicationName(String exclusiveStartApplicationName) {
        this.exclusiveStartApplicationName = exclusiveStartApplicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListApplicationsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}