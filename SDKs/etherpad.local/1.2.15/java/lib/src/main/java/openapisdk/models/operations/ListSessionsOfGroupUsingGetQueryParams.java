package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSessionsOfGroupUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupID")
    public String groupID;
    public ListSessionsOfGroupUsingGetQueryParams withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
}