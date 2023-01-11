package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateResourceSharePermissionRequest {
    public AssociateResourceSharePermissionHeaders headers;
    public AssociateResourceSharePermissionRequest withHeaders(AssociateResourceSharePermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateResourceSharePermissionRequestBody request;
    public AssociateResourceSharePermissionRequest withRequest(AssociateResourceSharePermissionRequestBody request) {
        this.request = request;
        return this;
    }
}