package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group")
    public String group;
    public GetGroupDetailsPathParams withGroup(String group) {
        this.group = group;
        return this;
    }
}