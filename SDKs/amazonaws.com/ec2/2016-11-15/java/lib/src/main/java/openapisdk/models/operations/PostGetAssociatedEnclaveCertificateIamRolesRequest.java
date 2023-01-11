package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAssociatedEnclaveCertificateIamRolesRequest {
    public PostGetAssociatedEnclaveCertificateIamRolesQueryParams queryParams;
    public PostGetAssociatedEnclaveCertificateIamRolesRequest withQueryParams(PostGetAssociatedEnclaveCertificateIamRolesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetAssociatedEnclaveCertificateIamRolesHeaders headers;
    public PostGetAssociatedEnclaveCertificateIamRolesRequest withHeaders(PostGetAssociatedEnclaveCertificateIamRolesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetAssociatedEnclaveCertificateIamRolesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}