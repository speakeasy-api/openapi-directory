package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateResourceSharePermissionRequest {
    public DisassociateResourceSharePermissionHeaders headers;
    public DisassociateResourceSharePermissionRequest withHeaders(DisassociateResourceSharePermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DisassociateResourceSharePermissionRequestBody request;
    public DisassociateResourceSharePermissionRequest withRequest(DisassociateResourceSharePermissionRequestBody request) {
        this.request = request;
        return this;
    }
}