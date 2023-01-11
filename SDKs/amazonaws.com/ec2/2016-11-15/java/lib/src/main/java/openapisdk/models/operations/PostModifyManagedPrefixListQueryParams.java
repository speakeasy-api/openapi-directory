package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyManagedPrefixListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyManagedPrefixListActionEnum action;
    public PostModifyManagedPrefixListQueryParams withAction(PostModifyManagedPrefixListActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyManagedPrefixListVersionEnum version;
    public PostModifyManagedPrefixListQueryParams withVersion(PostModifyManagedPrefixListVersionEnum version) {
        this.version = version;
        return this;
    }
}