package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTrafficMirrorFilterNetworkServicesRequest {
    public PostModifyTrafficMirrorFilterNetworkServicesQueryParams queryParams;
    public PostModifyTrafficMirrorFilterNetworkServicesRequest withQueryParams(PostModifyTrafficMirrorFilterNetworkServicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyTrafficMirrorFilterNetworkServicesHeaders headers;
    public PostModifyTrafficMirrorFilterNetworkServicesRequest withHeaders(PostModifyTrafficMirrorFilterNetworkServicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyTrafficMirrorFilterNetworkServicesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}