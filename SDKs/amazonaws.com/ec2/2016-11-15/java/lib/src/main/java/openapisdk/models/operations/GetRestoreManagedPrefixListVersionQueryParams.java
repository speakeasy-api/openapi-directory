package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRestoreManagedPrefixListVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRestoreManagedPrefixListVersionActionEnum action;
    public GetRestoreManagedPrefixListVersionQueryParams withAction(GetRestoreManagedPrefixListVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CurrentVersion")
    public Long currentVersion;
    public GetRestoreManagedPrefixListVersionQueryParams withCurrentVersion(Long currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetRestoreManagedPrefixListVersionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrefixListId")
    public String prefixListId;
    public GetRestoreManagedPrefixListVersionQueryParams withPrefixListId(String prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PreviousVersion")
    public Long previousVersion;
    public GetRestoreManagedPrefixListVersionQueryParams withPreviousVersion(Long previousVersion) {
        this.previousVersion = previousVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRestoreManagedPrefixListVersionVersionEnum version;
    public GetRestoreManagedPrefixListVersionQueryParams withVersion(GetRestoreManagedPrefixListVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}