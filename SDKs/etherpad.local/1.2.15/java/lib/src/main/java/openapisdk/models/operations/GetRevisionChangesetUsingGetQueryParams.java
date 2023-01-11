package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevisionChangesetUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetRevisionChangesetUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rev")
    public String rev;
    public GetRevisionChangesetUsingGetQueryParams withRev(String rev) {
        this.rev = rev;
        return this;
    }
}