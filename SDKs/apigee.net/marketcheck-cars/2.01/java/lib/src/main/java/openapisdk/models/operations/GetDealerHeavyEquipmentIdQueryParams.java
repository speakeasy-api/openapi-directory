package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealerHeavyEquipmentIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetDealerHeavyEquipmentIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provider")
    public Boolean provider;
    public GetDealerHeavyEquipmentIdQueryParams withProvider(Boolean provider) {
        this.provider = provider;
        return this;
    }
}