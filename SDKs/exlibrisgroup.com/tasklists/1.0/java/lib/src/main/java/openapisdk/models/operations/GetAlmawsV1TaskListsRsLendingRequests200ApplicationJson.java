package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson
 * A list of resource sharing requests.
**/
public class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_record_count")
    public Long totalRecordCount;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson withTotalRecordCount(Long totalRecordCount) {
        this.totalRecordCount = totalRecordCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_resource_sharing_request")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest[] userResourceSharingRequest;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson withUserResourceSharingRequest(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest[] userResourceSharingRequest) {
        this.userResourceSharingRequest = userResourceSharingRequest;
        return this;
    }
}