package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGroupUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group")
    public String group;
    public ListGroupUsersPathParams withGroup(String group) {
        this.group = group;
        return this;
    }
}