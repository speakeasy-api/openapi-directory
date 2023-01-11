package openapisdk.models.operations;



public class WithdrawByoipCidrResponse {
    public Object accessDeniedException;
    public WithdrawByoipCidrResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object byoipCidrNotFoundException;
    public WithdrawByoipCidrResponse withByoipCidrNotFoundException(Object byoipCidrNotFoundException) {
        this.byoipCidrNotFoundException = byoipCidrNotFoundException;
        return this;
    }
    public String contentType;
    public WithdrawByoipCidrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incorrectCidrStateException;
    public WithdrawByoipCidrResponse withIncorrectCidrStateException(Object incorrectCidrStateException) {
        this.incorrectCidrStateException = incorrectCidrStateException;
        return this;
    }
    public Object internalServiceErrorException;
    public WithdrawByoipCidrResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public WithdrawByoipCidrResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public WithdrawByoipCidrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WithdrawByoipCidrResponse withdrawByoipCidrResponse;
    public WithdrawByoipCidrResponse withWithdrawByoipCidrResponse(openapisdk.models.shared.WithdrawByoipCidrResponse withdrawByoipCidrResponse) {
        this.withdrawByoipCidrResponse = withdrawByoipCidrResponse;
        return this;
    }
}