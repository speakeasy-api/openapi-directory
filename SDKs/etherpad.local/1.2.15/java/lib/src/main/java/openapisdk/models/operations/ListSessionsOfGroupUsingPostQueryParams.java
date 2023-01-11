package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSessionsOfGroupUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupID")
    public String groupID;
    public ListSessionsOfGroupUsingPostQueryParams withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
}