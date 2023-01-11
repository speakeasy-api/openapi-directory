package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetManagedPrefixListEntriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetManagedPrefixListEntriesActionEnum action;
    public GetGetManagedPrefixListEntriesQueryParams withAction(GetGetManagedPrefixListEntriesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetManagedPrefixListEntriesQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetGetManagedPrefixListEntriesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetGetManagedPrefixListEntriesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrefixListId")
    public String prefixListId;
    public GetGetManagedPrefixListEntriesQueryParams withPrefixListId(String prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetVersion")
    public Long targetVersion;
    public GetGetManagedPrefixListEntriesQueryParams withTargetVersion(Long targetVersion) {
        this.targetVersion = targetVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetManagedPrefixListEntriesVersionEnum version;
    public GetGetManagedPrefixListEntriesQueryParams withVersion(GetGetManagedPrefixListEntriesVersionEnum version) {
        this.version = version;
        return this;
    }
}