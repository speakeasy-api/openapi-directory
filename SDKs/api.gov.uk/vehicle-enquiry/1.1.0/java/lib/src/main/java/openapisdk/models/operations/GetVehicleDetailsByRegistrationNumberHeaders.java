package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehicleDetailsByRegistrationNumberHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Correlation-Id")
    public String xCorrelationId;
    public GetVehicleDetailsByRegistrationNumberHeaders withXCorrelationId(String xCorrelationId) {
        this.xCorrelationId = xCorrelationId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetVehicleDetailsByRegistrationNumberHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}