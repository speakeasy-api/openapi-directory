package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOutpostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=OutpostId")
    public String outpostId;
    public DeleteOutpostPathParams withOutpostId(String outpostId) {
        this.outpostId = outpostId;
        return this;
    }
}