package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOtaUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=otaUpdateId")
    public String otaUpdateId;
    public CreateOtaUpdatePathParams withOtaUpdateId(String otaUpdateId) {
        this.otaUpdateId = otaUpdateId;
        return this;
    }
}