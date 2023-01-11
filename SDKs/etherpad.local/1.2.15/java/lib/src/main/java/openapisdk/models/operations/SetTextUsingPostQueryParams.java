package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetTextUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public SetTextUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SetTextUsingPostQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}