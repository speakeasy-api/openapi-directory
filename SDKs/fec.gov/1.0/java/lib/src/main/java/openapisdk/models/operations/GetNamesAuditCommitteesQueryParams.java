package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamesAuditCommitteesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetNamesAuditCommitteesQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String[] q;
    public GetNamesAuditCommitteesQueryParams withQ(String[] q) {
        this.q = q;
        return this;
    }
}