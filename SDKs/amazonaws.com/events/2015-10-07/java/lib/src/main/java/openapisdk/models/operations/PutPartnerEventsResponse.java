package openapisdk.models.operations;



public class PutPartnerEventsResponse {
    public String contentType;
    public PutPartnerEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public PutPartnerEventsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object operationDisabledException;
    public PutPartnerEventsResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public openapisdk.models.shared.PutPartnerEventsResponse putPartnerEventsResponse;
    public PutPartnerEventsResponse withPutPartnerEventsResponse(openapisdk.models.shared.PutPartnerEventsResponse putPartnerEventsResponse) {
        this.putPartnerEventsResponse = putPartnerEventsResponse;
        return this;
    }
    public Long statusCode;
    public PutPartnerEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}