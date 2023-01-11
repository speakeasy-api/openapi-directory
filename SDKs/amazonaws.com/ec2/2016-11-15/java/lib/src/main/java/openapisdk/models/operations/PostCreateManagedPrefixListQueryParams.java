package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateManagedPrefixListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateManagedPrefixListActionEnum action;
    public PostCreateManagedPrefixListQueryParams withAction(PostCreateManagedPrefixListActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateManagedPrefixListVersionEnum version;
    public PostCreateManagedPrefixListQueryParams withVersion(PostCreateManagedPrefixListVersionEnum version) {
        this.version = version;
        return this;
    }
}