package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote
 * Specific related note.
**/
public class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public LocalDate createdDate;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote withCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
        return this;
    }
}