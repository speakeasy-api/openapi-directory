package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectProtectiveEquipmentRequest {
    public DetectProtectiveEquipmentHeaders headers;
    public DetectProtectiveEquipmentRequest withHeaders(DetectProtectiveEquipmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectProtectiveEquipmentRequest request;
    public DetectProtectiveEquipmentRequest withRequest(openapisdk.models.shared.DetectProtectiveEquipmentRequest request) {
        this.request = request;
        return this;
    }
}