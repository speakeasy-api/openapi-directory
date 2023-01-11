package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupPadUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupID")
    public String groupID;
    public CreateGroupPadUsingPostQueryParams withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padName")
    public String padName;
    public CreateGroupPadUsingPostQueryParams withPadName(String padName) {
        this.padName = padName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public CreateGroupPadUsingPostQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}