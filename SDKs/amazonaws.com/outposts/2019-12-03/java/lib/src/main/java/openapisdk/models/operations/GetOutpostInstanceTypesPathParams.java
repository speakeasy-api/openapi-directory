package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOutpostInstanceTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=OutpostId")
    public String outpostId;
    public GetOutpostInstanceTypesPathParams withOutpostId(String outpostId) {
        this.outpostId = outpostId;
        return this;
    }
}