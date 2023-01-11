package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReadOnlyIdUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetReadOnlyIdUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}