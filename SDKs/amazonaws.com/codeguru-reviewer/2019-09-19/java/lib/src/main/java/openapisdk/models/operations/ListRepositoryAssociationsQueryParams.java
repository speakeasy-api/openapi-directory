package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRepositoryAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListRepositoryAssociationsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Name")
    public String[] name;
    public ListRepositoryAssociationsQueryParams withName(String[] name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListRepositoryAssociationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Owner")
    public String[] owner;
    public ListRepositoryAssociationsQueryParams withOwner(String[] owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProviderType")
    public openapisdk.models.shared.ProviderTypeEnum[] providerType;
    public ListRepositoryAssociationsQueryParams withProviderType(openapisdk.models.shared.ProviderTypeEnum[] providerType) {
        this.providerType = providerType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=State")
    public openapisdk.models.shared.RepositoryAssociationStateEnum[] state;
    public ListRepositoryAssociationsQueryParams withState(openapisdk.models.shared.RepositoryAssociationStateEnum[] state) {
        this.state = state;
        return this;
    }
}