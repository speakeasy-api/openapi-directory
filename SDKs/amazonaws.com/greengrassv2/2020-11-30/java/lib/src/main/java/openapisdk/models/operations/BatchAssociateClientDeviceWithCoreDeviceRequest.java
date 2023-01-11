package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchAssociateClientDeviceWithCoreDeviceRequest {
    public BatchAssociateClientDeviceWithCoreDevicePathParams pathParams;
    public BatchAssociateClientDeviceWithCoreDeviceRequest withPathParams(BatchAssociateClientDeviceWithCoreDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchAssociateClientDeviceWithCoreDeviceHeaders headers;
    public BatchAssociateClientDeviceWithCoreDeviceRequest withHeaders(BatchAssociateClientDeviceWithCoreDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchAssociateClientDeviceWithCoreDeviceRequestBody request;
    public BatchAssociateClientDeviceWithCoreDeviceRequest withRequest(BatchAssociateClientDeviceWithCoreDeviceRequestBody request) {
        this.request = request;
        return this;
    }
}