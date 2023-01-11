package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTextUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetTextUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rev")
    public String rev;
    public GetTextUsingPostQueryParams withRev(String rev) {
        this.rev = rev;
        return this;
    }
}