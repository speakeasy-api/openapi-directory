package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingHeavyEquipmentIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingHeavyEquipmentIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}