package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRequestedResources200ApplicationJson
 * A list of requested resources.
**/
public class GetAlmawsV1TaskListsRequestedResources200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_resource")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource[] requestedResource;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJson withRequestedResource(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource[] requestedResource) {
        this.requestedResource = requestedResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_record_count")
    public Integer totalRecordCount;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJson withTotalRecordCount(Integer totalRecordCount) {
        this.totalRecordCount = totalRecordCount;
        return this;
    }
}