package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostImportInstanceActionEnum action;
    public PostImportInstanceQueryParams withAction(PostImportInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostImportInstanceVersionEnum version;
    public PostImportInstanceQueryParams withVersion(PostImportInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}