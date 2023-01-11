package openapisdk.models.operations;



public class TestMetricFilterResponse {
    public String contentType;
    public TestMetricFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public TestMetricFilterResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceUnavailableException;
    public TestMetricFilterResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public TestMetricFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestMetricFilterResponse testMetricFilterResponse;
    public TestMetricFilterResponse withTestMetricFilterResponse(openapisdk.models.shared.TestMetricFilterResponse testMetricFilterResponse) {
        this.testMetricFilterResponse = testMetricFilterResponse;
        return this;
    }
}