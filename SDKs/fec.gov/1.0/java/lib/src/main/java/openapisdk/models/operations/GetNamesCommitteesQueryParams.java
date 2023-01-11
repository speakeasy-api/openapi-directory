package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamesCommitteesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetNamesCommitteesQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String[] q;
    public GetNamesCommitteesQueryParams withQ(String[] q) {
        this.q = q;
        return this;
    }
}