package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveRevisionUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public SaveRevisionUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rev")
    public String rev;
    public SaveRevisionUsingPostQueryParams withRev(String rev) {
        this.rev = rev;
        return this;
    }
}