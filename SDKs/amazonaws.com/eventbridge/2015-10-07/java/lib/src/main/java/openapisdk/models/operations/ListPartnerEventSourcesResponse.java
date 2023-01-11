package openapisdk.models.operations;



public class ListPartnerEventSourcesResponse {
    public String contentType;
    public ListPartnerEventSourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListPartnerEventSourcesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.ListPartnerEventSourcesResponse listPartnerEventSourcesResponse;
    public ListPartnerEventSourcesResponse withListPartnerEventSourcesResponse(openapisdk.models.shared.ListPartnerEventSourcesResponse listPartnerEventSourcesResponse) {
        this.listPartnerEventSourcesResponse = listPartnerEventSourcesResponse;
        return this;
    }
    public Object operationDisabledException;
    public ListPartnerEventSourcesResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public Long statusCode;
    public ListPartnerEventSourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}