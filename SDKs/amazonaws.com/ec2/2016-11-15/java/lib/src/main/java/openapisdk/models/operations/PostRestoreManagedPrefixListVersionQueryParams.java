package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreManagedPrefixListVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRestoreManagedPrefixListVersionActionEnum action;
    public PostRestoreManagedPrefixListVersionQueryParams withAction(PostRestoreManagedPrefixListVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRestoreManagedPrefixListVersionVersionEnum version;
    public PostRestoreManagedPrefixListVersionQueryParams withVersion(PostRestoreManagedPrefixListVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}