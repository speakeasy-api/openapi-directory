package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCheckForUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_testflight")
    public Long isTestflight;
    public GetCheckForUpdateQueryParams withIsTestflight(Long isTestflight) {
        this.isTestflight = isTestflight;
        return this;
    }
}