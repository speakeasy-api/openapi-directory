package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportVolumeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostImportVolumeActionEnum action;
    public PostImportVolumeQueryParams withAction(PostImportVolumeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostImportVolumeVersionEnum version;
    public PostImportVolumeQueryParams withVersion(PostImportVolumeVersionEnum version) {
        this.version = version;
        return this;
    }
}