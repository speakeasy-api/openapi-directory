package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCodeReviewsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListCodeReviewsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListCodeReviewsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProviderTypes")
    public openapisdk.models.shared.ProviderTypeEnum[] providerTypes;
    public ListCodeReviewsQueryParams withProviderTypes(openapisdk.models.shared.ProviderTypeEnum[] providerTypes) {
        this.providerTypes = providerTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RepositoryNames")
    public String[] repositoryNames;
    public ListCodeReviewsQueryParams withRepositoryNames(String[] repositoryNames) {
        this.repositoryNames = repositoryNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=States")
    public openapisdk.models.shared.JobStateEnum[] states;
    public ListCodeReviewsQueryParams withStates(openapisdk.models.shared.JobStateEnum[] states) {
        this.states = states;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Type")
    public ListCodeReviewsTypeEnum type;
    public ListCodeReviewsQueryParams withType(ListCodeReviewsTypeEnum type) {
        this.type = type;
        return this;
    }
}