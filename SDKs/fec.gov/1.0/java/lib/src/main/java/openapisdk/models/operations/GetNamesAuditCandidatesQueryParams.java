package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamesAuditCandidatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetNamesAuditCandidatesQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String[] q;
    public GetNamesAuditCandidatesQueryParams withQ(String[] q) {
        this.q = q;
        return this;
    }
}