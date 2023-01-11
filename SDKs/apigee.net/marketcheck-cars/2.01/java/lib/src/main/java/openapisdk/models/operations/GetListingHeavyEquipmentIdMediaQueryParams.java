package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingHeavyEquipmentIdMediaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingHeavyEquipmentIdMediaQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}