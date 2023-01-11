package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveRevisionUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public SaveRevisionUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rev")
    public String rev;
    public SaveRevisionUsingGetQueryParams withRev(String rev) {
        this.rev = rev;
        return this;
    }
}