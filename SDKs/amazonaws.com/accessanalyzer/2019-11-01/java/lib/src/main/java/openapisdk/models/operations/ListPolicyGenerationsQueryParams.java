package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPolicyGenerationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListPolicyGenerationsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListPolicyGenerationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=principalArn")
    public String principalArn;
    public ListPolicyGenerationsQueryParams withPrincipalArn(String principalArn) {
        this.principalArn = principalArn;
        return this;
    }
}