package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreAddressToClassicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRestoreAddressToClassicActionEnum action;
    public PostRestoreAddressToClassicQueryParams withAction(PostRestoreAddressToClassicActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRestoreAddressToClassicVersionEnum version;
    public PostRestoreAddressToClassicQueryParams withVersion(PostRestoreAddressToClassicVersionEnum version) {
        this.version = version;
        return this;
    }
}