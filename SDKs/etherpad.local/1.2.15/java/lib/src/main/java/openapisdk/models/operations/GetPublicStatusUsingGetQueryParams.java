package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicStatusUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetPublicStatusUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}