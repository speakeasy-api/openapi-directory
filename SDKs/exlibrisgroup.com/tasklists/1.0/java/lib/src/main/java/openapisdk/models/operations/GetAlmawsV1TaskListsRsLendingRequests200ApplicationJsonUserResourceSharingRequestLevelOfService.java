package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService
 * The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
**/
public class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService withValue(String value) {
        this.value = value;
        return this;
    }
}