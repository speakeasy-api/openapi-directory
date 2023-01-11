package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingCarFsboIdExtraQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingCarFsboIdExtraQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}