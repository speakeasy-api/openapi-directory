package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateEnclaveCertificateIamRoleRequest {
    public PostAssociateEnclaveCertificateIamRoleQueryParams queryParams;
    public PostAssociateEnclaveCertificateIamRoleRequest withQueryParams(PostAssociateEnclaveCertificateIamRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateEnclaveCertificateIamRoleHeaders headers;
    public PostAssociateEnclaveCertificateIamRoleRequest withHeaders(PostAssociateEnclaveCertificateIamRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateEnclaveCertificateIamRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}