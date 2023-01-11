package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceMetadataOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyInstanceMetadataOptionsActionEnum action;
    public PostModifyInstanceMetadataOptionsQueryParams withAction(PostModifyInstanceMetadataOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyInstanceMetadataOptionsVersionEnum version;
    public PostModifyInstanceMetadataOptionsQueryParams withVersion(PostModifyInstanceMetadataOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}