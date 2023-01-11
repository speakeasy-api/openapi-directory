package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppendTextUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public AppendTextUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public AppendTextUsingGetQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}