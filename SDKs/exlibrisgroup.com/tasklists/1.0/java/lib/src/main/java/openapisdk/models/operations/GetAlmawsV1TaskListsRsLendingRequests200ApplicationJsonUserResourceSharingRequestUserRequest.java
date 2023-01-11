package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest
 * The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
**/
public class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest withValue(String value) {
        this.value = value;
        return this;
    }
}