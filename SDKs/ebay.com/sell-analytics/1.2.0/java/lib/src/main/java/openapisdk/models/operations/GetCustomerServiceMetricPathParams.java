package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomerServiceMetricPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customer_service_metric_type")
    public String customerServiceMetricType;
    public GetCustomerServiceMetricPathParams withCustomerServiceMetricType(String customerServiceMetricType) {
        this.customerServiceMetricType = customerServiceMetricType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=evaluation_type")
    public String evaluationType;
    public GetCustomerServiceMetricPathParams withEvaluationType(String evaluationType) {
        this.evaluationType = evaluationType;
        return this;
    }
}