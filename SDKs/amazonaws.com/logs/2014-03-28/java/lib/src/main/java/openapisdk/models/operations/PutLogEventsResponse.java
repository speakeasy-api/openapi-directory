package openapisdk.models.operations;



public class PutLogEventsResponse {
    public String contentType;
    public PutLogEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dataAlreadyAcceptedException;
    public PutLogEventsResponse withDataAlreadyAcceptedException(Object dataAlreadyAcceptedException) {
        this.dataAlreadyAcceptedException = dataAlreadyAcceptedException;
        return this;
    }
    public Object invalidParameterException;
    public PutLogEventsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidSequenceTokenException;
    public PutLogEventsResponse withInvalidSequenceTokenException(Object invalidSequenceTokenException) {
        this.invalidSequenceTokenException = invalidSequenceTokenException;
        return this;
    }
    public openapisdk.models.shared.PutLogEventsResponse putLogEventsResponse;
    public PutLogEventsResponse withPutLogEventsResponse(openapisdk.models.shared.PutLogEventsResponse putLogEventsResponse) {
        this.putLogEventsResponse = putLogEventsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutLogEventsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public PutLogEventsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PutLogEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unrecognizedClientException;
    public PutLogEventsResponse withUnrecognizedClientException(Object unrecognizedClientException) {
        this.unrecognizedClientException = unrecognizedClientException;
        return this;
    }
}