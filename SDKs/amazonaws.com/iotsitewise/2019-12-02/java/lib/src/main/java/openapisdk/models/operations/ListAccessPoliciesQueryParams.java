package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccessPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iamArn")
    public String iamArn;
    public ListAccessPoliciesQueryParams withIamArn(String iamArn) {
        this.iamArn = iamArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=identityId")
    public String identityId;
    public ListAccessPoliciesQueryParams withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=identityType")
    public ListAccessPoliciesIdentityTypeEnum identityType;
    public ListAccessPoliciesQueryParams withIdentityType(ListAccessPoliciesIdentityTypeEnum identityType) {
        this.identityType = identityType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListAccessPoliciesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAccessPoliciesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceId")
    public String resourceId;
    public ListAccessPoliciesQueryParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceType")
    public ListAccessPoliciesResourceTypeEnum resourceType;
    public ListAccessPoliciesQueryParams withResourceType(ListAccessPoliciesResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}