package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListCustomVerificationEmailTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListCustomVerificationEmailTemplatesActionEnum action;
    public GetListCustomVerificationEmailTemplatesQueryParams withAction(GetListCustomVerificationEmailTemplatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetListCustomVerificationEmailTemplatesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetListCustomVerificationEmailTemplatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListCustomVerificationEmailTemplatesVersionEnum version;
    public GetListCustomVerificationEmailTemplatesQueryParams withVersion(GetListCustomVerificationEmailTemplatesVersionEnum version) {
        this.version = version;
        return this;
    }
}