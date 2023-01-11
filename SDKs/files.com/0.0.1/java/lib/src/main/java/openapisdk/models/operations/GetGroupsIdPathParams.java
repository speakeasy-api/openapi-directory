package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetGroupsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}