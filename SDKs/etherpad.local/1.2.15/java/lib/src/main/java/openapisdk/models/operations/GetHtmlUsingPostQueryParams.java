package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHtmlUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetHtmlUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rev")
    public String rev;
    public GetHtmlUsingPostQueryParams withRev(String rev) {
        this.rev = rev;
        return this;
    }
}