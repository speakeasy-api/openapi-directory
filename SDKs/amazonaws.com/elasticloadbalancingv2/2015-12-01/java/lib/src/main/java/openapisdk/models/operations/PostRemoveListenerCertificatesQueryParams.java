package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveListenerCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRemoveListenerCertificatesActionEnum action;
    public PostRemoveListenerCertificatesQueryParams withAction(PostRemoveListenerCertificatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRemoveListenerCertificatesVersionEnum version;
    public PostRemoveListenerCertificatesQueryParams withVersion(PostRemoveListenerCertificatesVersionEnum version) {
        this.version = version;
        return this;
    }
}