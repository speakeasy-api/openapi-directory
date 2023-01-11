package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchNotificationsIdRequest {
    public PatchNotificationsIdPathParams pathParams;
    public PatchNotificationsIdRequest withPathParams(PatchNotificationsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchNotificationsIdRequestBody request;
    public PatchNotificationsIdRequest withRequest(PatchNotificationsIdRequestBody request) {
        this.request = request;
        return this;
    }
}