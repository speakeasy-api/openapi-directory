package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPadsUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupID")
    public String groupID;
    public ListPadsUsingPostQueryParams withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
}