package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupPadUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupID")
    public String groupID;
    public CreateGroupPadUsingGetQueryParams withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padName")
    public String padName;
    public CreateGroupPadUsingGetQueryParams withPadName(String padName) {
        this.padName = padName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public CreateGroupPadUsingGetQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}