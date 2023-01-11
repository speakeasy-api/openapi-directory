package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHtmlUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetHtmlUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rev")
    public String rev;
    public GetHtmlUsingGetQueryParams withRev(String rev) {
        this.rev = rev;
        return this;
    }
}