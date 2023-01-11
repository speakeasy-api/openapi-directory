package openapisdk.models.operations;



public class GetContactReachabilityStatusResponse {
    public String contentType;
    public GetContactReachabilityStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetContactReachabilityStatusResponse getContactReachabilityStatusResponse;
    public GetContactReachabilityStatusResponse withGetContactReachabilityStatusResponse(openapisdk.models.shared.GetContactReachabilityStatusResponse getContactReachabilityStatusResponse) {
        this.getContactReachabilityStatusResponse = getContactReachabilityStatusResponse;
        return this;
    }
    public Object invalidInput;
    public GetContactReachabilityStatusResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public GetContactReachabilityStatusResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public GetContactReachabilityStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedTLD;
    public GetContactReachabilityStatusResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}