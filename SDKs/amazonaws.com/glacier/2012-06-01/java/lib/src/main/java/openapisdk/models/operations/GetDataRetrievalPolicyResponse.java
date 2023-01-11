package openapisdk.models.operations;



public class GetDataRetrievalPolicyResponse {
    public String contentType;
    public GetDataRetrievalPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDataRetrievalPolicyOutput getDataRetrievalPolicyOutput;
    public GetDataRetrievalPolicyResponse withGetDataRetrievalPolicyOutput(openapisdk.models.shared.GetDataRetrievalPolicyOutput getDataRetrievalPolicyOutput) {
        this.getDataRetrievalPolicyOutput = getDataRetrievalPolicyOutput;
        return this;
    }
    public Object invalidParameterValueException;
    public GetDataRetrievalPolicyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public GetDataRetrievalPolicyResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetDataRetrievalPolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetDataRetrievalPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}