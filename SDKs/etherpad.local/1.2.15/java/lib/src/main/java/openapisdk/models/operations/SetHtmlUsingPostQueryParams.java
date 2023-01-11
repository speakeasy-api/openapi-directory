package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetHtmlUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=html")
    public String html;
    public SetHtmlUsingPostQueryParams withHtml(String html) {
        this.html = html;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public SetHtmlUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}