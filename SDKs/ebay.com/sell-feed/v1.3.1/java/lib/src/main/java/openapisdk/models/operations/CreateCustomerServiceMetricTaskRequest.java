package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerServiceMetricTaskRequest {
    public CreateCustomerServiceMetricTaskHeaders headers;
    public CreateCustomerServiceMetricTaskRequest withHeaders(CreateCustomerServiceMetricTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateServiceMetricsTaskRequest request;
    public CreateCustomerServiceMetricTaskRequest withRequest(openapisdk.models.shared.CreateServiceMetricsTaskRequest request) {
        this.request = request;
        return this;
    }
    public CreateCustomerServiceMetricTaskSecurity security;
    public CreateCustomerServiceMetricTaskRequest withSecurity(CreateCustomerServiceMetricTaskSecurity security) {
        this.security = security;
        return this;
    }
}