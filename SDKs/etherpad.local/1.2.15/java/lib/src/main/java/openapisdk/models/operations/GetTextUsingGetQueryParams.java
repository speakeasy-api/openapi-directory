package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTextUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetTextUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rev")
    public String rev;
    public GetTextUsingGetQueryParams withRev(String rev) {
        this.rev = rev;
        return this;
    }
}