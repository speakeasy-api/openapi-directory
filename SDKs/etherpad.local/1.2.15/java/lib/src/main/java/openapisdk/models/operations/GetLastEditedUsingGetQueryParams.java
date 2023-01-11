package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLastEditedUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetLastEditedUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}