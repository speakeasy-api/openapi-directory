package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetVaultNotificationsRequest {
    public SetVaultNotificationsPathParams pathParams;
    public SetVaultNotificationsRequest withPathParams(SetVaultNotificationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SetVaultNotificationsHeaders headers;
    public SetVaultNotificationsRequest withHeaders(SetVaultNotificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetVaultNotificationsRequestBody request;
    public SetVaultNotificationsRequest withRequest(SetVaultNotificationsRequestBody request) {
        this.request = request;
        return this;
    }
}