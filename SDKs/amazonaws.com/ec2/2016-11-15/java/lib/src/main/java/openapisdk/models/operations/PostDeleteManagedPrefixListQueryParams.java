package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteManagedPrefixListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteManagedPrefixListActionEnum action;
    public PostDeleteManagedPrefixListQueryParams withAction(PostDeleteManagedPrefixListActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteManagedPrefixListVersionEnum version;
    public PostDeleteManagedPrefixListQueryParams withVersion(PostDeleteManagedPrefixListVersionEnum version) {
        this.version = version;
        return this;
    }
}