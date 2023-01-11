package openapisdk.models.operations;



public class SendAlexaOfferToMasterResponse {
    public Object clientLimitExceededException;
    public SendAlexaOfferToMasterResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public SendAlexaOfferToMasterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public SendAlexaOfferToMasterResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object notAuthorizedException;
    public SendAlexaOfferToMasterResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public SendAlexaOfferToMasterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SendAlexaOfferToMasterResponse sendAlexaOfferToMasterResponse;
    public SendAlexaOfferToMasterResponse withSendAlexaOfferToMasterResponse(openapisdk.models.shared.SendAlexaOfferToMasterResponse sendAlexaOfferToMasterResponse) {
        this.sendAlexaOfferToMasterResponse = sendAlexaOfferToMasterResponse;
        return this;
    }
    public Long statusCode;
    public SendAlexaOfferToMasterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}