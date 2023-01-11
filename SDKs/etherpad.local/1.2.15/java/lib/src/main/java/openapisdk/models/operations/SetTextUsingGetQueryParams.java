package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetTextUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public SetTextUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SetTextUsingGetQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}