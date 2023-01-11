package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteManagedPrefixListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteManagedPrefixListActionEnum action;
    public GetDeleteManagedPrefixListQueryParams withAction(GetDeleteManagedPrefixListActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteManagedPrefixListQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrefixListId")
    public String prefixListId;
    public GetDeleteManagedPrefixListQueryParams withPrefixListId(String prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteManagedPrefixListVersionEnum version;
    public GetDeleteManagedPrefixListQueryParams withVersion(GetDeleteManagedPrefixListVersionEnum version) {
        this.version = version;
        return this;
    }
}