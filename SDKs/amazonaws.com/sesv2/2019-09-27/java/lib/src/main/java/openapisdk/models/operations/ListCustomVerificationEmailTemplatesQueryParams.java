package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomVerificationEmailTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListCustomVerificationEmailTemplatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCustomVerificationEmailTemplatesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}