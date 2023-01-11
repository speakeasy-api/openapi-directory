package openapisdk.models.operations;



public class ResendContactReachabilityEmailResponse {
    public String contentType;
    public ResendContactReachabilityEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public ResendContactReachabilityEmailResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public ResendContactReachabilityEmailResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public openapisdk.models.shared.ResendContactReachabilityEmailResponse resendContactReachabilityEmailResponse;
    public ResendContactReachabilityEmailResponse withResendContactReachabilityEmailResponse(openapisdk.models.shared.ResendContactReachabilityEmailResponse resendContactReachabilityEmailResponse) {
        this.resendContactReachabilityEmailResponse = resendContactReachabilityEmailResponse;
        return this;
    }
    public Long statusCode;
    public ResendContactReachabilityEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedTLD;
    public ResendContactReachabilityEmailResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}