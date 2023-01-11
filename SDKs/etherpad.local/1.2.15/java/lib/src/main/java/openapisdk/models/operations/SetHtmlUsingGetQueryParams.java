package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetHtmlUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=html")
    public String html;
    public SetHtmlUsingGetQueryParams withHtml(String html) {
        this.html = html;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public SetHtmlUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}