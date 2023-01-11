package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOtaUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=otaUpdateId")
    public String otaUpdateId;
    public DeleteOtaUpdatePathParams withOtaUpdateId(String otaUpdateId) {
        this.otaUpdateId = otaUpdateId;
        return this;
    }
}