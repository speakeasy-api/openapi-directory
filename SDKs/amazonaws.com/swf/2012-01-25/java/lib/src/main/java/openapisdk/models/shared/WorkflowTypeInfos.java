package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowTypeInfos
 * Contains a paginated list of information structures about workflow types.
**/
public class WorkflowTypeInfos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public WorkflowTypeInfos withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonProperty("typeInfos")
    public WorkflowTypeInfo[] typeInfos;
    public WorkflowTypeInfos withTypeInfos(WorkflowTypeInfo[] typeInfos) {
        this.typeInfos = typeInfos;
        return this;
    }
}