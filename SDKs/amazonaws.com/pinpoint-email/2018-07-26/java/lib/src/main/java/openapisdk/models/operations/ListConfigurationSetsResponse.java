package openapisdk.models.operations;



public class ListConfigurationSetsResponse {
    public Object badRequestException;
    public ListConfigurationSetsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListConfigurationSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConfigurationSetsResponse listConfigurationSetsResponse;
    public ListConfigurationSetsResponse withListConfigurationSetsResponse(openapisdk.models.shared.ListConfigurationSetsResponse listConfigurationSetsResponse) {
        this.listConfigurationSetsResponse = listConfigurationSetsResponse;
        return this;
    }
    public Long statusCode;
    public ListConfigurationSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListConfigurationSetsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}