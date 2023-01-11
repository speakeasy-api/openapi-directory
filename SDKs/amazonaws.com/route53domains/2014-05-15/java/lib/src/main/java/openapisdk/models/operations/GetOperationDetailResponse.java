package openapisdk.models.operations;



public class GetOperationDetailResponse {
    public String contentType;
    public GetOperationDetailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOperationDetailResponse getOperationDetailResponse;
    public GetOperationDetailResponse withGetOperationDetailResponse(openapisdk.models.shared.GetOperationDetailResponse getOperationDetailResponse) {
        this.getOperationDetailResponse = getOperationDetailResponse;
        return this;
    }
    public Object invalidInput;
    public GetOperationDetailResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Long statusCode;
    public GetOperationDetailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}