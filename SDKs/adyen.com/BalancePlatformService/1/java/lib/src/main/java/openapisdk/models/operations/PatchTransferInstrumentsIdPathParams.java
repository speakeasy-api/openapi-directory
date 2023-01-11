package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTransferInstrumentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchTransferInstrumentsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}