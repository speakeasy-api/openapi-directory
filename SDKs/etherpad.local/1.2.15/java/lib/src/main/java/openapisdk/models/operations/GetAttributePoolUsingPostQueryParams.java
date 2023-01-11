package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttributePoolUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetAttributePoolUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}