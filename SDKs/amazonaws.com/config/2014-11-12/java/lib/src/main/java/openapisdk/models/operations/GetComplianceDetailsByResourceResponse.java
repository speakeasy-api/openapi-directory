package openapisdk.models.operations;



public class GetComplianceDetailsByResourceResponse {
    public String contentType;
    public GetComplianceDetailsByResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetComplianceDetailsByResourceResponse getComplianceDetailsByResourceResponse;
    public GetComplianceDetailsByResourceResponse withGetComplianceDetailsByResourceResponse(openapisdk.models.shared.GetComplianceDetailsByResourceResponse getComplianceDetailsByResourceResponse) {
        this.getComplianceDetailsByResourceResponse = getComplianceDetailsByResourceResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetComplianceDetailsByResourceResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public GetComplianceDetailsByResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}