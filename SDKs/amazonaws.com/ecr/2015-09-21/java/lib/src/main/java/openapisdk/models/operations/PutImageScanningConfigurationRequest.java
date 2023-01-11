package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutImageScanningConfigurationRequest {
    public PutImageScanningConfigurationHeaders headers;
    public PutImageScanningConfigurationRequest withHeaders(PutImageScanningConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutImageScanningConfigurationRequest request;
    public PutImageScanningConfigurationRequest withRequest(openapisdk.models.shared.PutImageScanningConfigurationRequest request) {
        this.request = request;
        return this;
    }
}