package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtendLicenseConsumptionRequest {
    public ExtendLicenseConsumptionHeaders headers;
    public ExtendLicenseConsumptionRequest withHeaders(ExtendLicenseConsumptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExtendLicenseConsumptionRequest request;
    public ExtendLicenseConsumptionRequest withRequest(openapisdk.models.shared.ExtendLicenseConsumptionRequest request) {
        this.request = request;
        return this;
    }
}