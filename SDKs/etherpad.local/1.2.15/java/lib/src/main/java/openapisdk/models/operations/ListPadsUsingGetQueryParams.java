package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPadsUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupID")
    public String groupID;
    public ListPadsUsingGetQueryParams withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
}