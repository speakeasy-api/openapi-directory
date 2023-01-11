package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScimSetInformationForProvisionedUserRequest {
    public ScimSetInformationForProvisionedUserPathParams pathParams;
    public ScimSetInformationForProvisionedUserRequest withPathParams(ScimSetInformationForProvisionedUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ScimSetInformationForProvisionedUserRequestBody request;
    public ScimSetInformationForProvisionedUserRequest withRequest(ScimSetInformationForProvisionedUserRequestBody request) {
        this.request = request;
        return this;
    }
}