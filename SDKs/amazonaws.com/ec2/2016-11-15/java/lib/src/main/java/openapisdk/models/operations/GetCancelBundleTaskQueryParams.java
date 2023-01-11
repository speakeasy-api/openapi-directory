package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCancelBundleTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCancelBundleTaskActionEnum action;
    public GetCancelBundleTaskQueryParams withAction(GetCancelBundleTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BundleId")
    public String bundleId;
    public GetCancelBundleTaskQueryParams withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCancelBundleTaskQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCancelBundleTaskVersionEnum version;
    public GetCancelBundleTaskQueryParams withVersion(GetCancelBundleTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}