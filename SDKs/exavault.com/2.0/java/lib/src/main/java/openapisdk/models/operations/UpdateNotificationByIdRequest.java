package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNotificationByIdRequest {
    public UpdateNotificationByIdPathParams pathParams;
    public UpdateNotificationByIdRequest withPathParams(UpdateNotificationByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateNotificationByIdHeaders headers;
    public UpdateNotificationByIdRequest withHeaders(UpdateNotificationByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNotificationByIdUpdateNotificationByIdRequestBody request;
    public UpdateNotificationByIdRequest withRequest(UpdateNotificationByIdUpdateNotificationByIdRequestBody request) {
        this.request = request;
        return this;
    }
}