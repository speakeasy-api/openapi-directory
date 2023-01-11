package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOtaUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=otaUpdateId")
    public String otaUpdateId;
    public GetOtaUpdatePathParams withOtaUpdateId(String otaUpdateId) {
        this.otaUpdateId = otaUpdateId;
        return this;
    }
}