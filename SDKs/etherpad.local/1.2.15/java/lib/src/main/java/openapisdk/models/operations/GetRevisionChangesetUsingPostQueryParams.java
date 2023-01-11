package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevisionChangesetUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetRevisionChangesetUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rev")
    public String rev;
    public GetRevisionChangesetUsingPostQueryParams withRev(String rev) {
        this.rev = rev;
        return this;
    }
}