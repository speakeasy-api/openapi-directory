package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOutpostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=OutpostId")
    public String outpostId;
    public GetOutpostPathParams withOutpostId(String outpostId) {
        this.outpostId = outpostId;
        return this;
    }
}