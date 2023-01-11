package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttributePoolUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetAttributePoolUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}