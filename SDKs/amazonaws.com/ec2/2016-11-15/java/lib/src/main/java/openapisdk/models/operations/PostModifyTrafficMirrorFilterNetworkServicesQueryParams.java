package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTrafficMirrorFilterNetworkServicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyTrafficMirrorFilterNetworkServicesActionEnum action;
    public PostModifyTrafficMirrorFilterNetworkServicesQueryParams withAction(PostModifyTrafficMirrorFilterNetworkServicesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyTrafficMirrorFilterNetworkServicesVersionEnum version;
    public PostModifyTrafficMirrorFilterNetworkServicesQueryParams withVersion(PostModifyTrafficMirrorFilterNetworkServicesVersionEnum version) {
        this.version = version;
        return this;
    }
}