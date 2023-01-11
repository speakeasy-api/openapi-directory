package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateEnclaveCertificateIamRoleRequest {
    public PostDisassociateEnclaveCertificateIamRoleQueryParams queryParams;
    public PostDisassociateEnclaveCertificateIamRoleRequest withQueryParams(PostDisassociateEnclaveCertificateIamRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateEnclaveCertificateIamRoleHeaders headers;
    public PostDisassociateEnclaveCertificateIamRoleRequest withHeaders(PostDisassociateEnclaveCertificateIamRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateEnclaveCertificateIamRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}