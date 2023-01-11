package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelineNotificationsRequest {
    public UpdatePipelineNotificationsPathParams pathParams;
    public UpdatePipelineNotificationsRequest withPathParams(UpdatePipelineNotificationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePipelineNotificationsHeaders headers;
    public UpdatePipelineNotificationsRequest withHeaders(UpdatePipelineNotificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePipelineNotificationsRequestBody request;
    public UpdatePipelineNotificationsRequest withRequest(UpdatePipelineNotificationsRequestBody request) {
        this.request = request;
        return this;
    }
}