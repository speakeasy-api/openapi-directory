package openapisdk.models.operations;



public class ListJobExecutionsForThingResponse {
    public String contentType;
    public ListJobExecutionsForThingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public ListJobExecutionsForThingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListJobExecutionsForThingResponse listJobExecutionsForThingResponse;
    public ListJobExecutionsForThingResponse withListJobExecutionsForThingResponse(openapisdk.models.shared.ListJobExecutionsForThingResponse listJobExecutionsForThingResponse) {
        this.listJobExecutionsForThingResponse = listJobExecutionsForThingResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListJobExecutionsForThingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListJobExecutionsForThingResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListJobExecutionsForThingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListJobExecutionsForThingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}