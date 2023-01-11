package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminListDevicesRequest {
    public AdminListDevicesHeaders headers;
    public AdminListDevicesRequest withHeaders(AdminListDevicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminListDevicesRequest request;
    public AdminListDevicesRequest withRequest(openapisdk.models.shared.AdminListDevicesRequest request) {
        this.request = request;
        return this;
    }
}