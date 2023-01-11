package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicStatusUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetPublicStatusUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}