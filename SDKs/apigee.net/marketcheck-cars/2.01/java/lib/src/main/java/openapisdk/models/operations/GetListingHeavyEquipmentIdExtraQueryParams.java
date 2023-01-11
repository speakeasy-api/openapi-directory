package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingHeavyEquipmentIdExtraQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingHeavyEquipmentIdExtraQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}