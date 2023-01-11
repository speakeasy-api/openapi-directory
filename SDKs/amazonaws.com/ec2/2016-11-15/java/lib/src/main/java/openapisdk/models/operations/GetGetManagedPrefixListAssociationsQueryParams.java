package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetManagedPrefixListAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetManagedPrefixListAssociationsActionEnum action;
    public GetGetManagedPrefixListAssociationsQueryParams withAction(GetGetManagedPrefixListAssociationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetManagedPrefixListAssociationsQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetGetManagedPrefixListAssociationsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetGetManagedPrefixListAssociationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrefixListId")
    public String prefixListId;
    public GetGetManagedPrefixListAssociationsQueryParams withPrefixListId(String prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetManagedPrefixListAssociationsVersionEnum version;
    public GetGetManagedPrefixListAssociationsQueryParams withVersion(GetGetManagedPrefixListAssociationsVersionEnum version) {
        this.version = version;
        return this;
    }
}