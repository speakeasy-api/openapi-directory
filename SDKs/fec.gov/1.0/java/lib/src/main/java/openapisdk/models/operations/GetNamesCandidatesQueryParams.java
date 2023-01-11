package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamesCandidatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetNamesCandidatesQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String[] q;
    public GetNamesCandidatesQueryParams withQ(String[] q) {
        this.q = q;
        return this;
    }
}