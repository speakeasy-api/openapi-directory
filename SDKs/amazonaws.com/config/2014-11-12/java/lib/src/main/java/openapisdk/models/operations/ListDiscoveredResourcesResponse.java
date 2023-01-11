package openapisdk.models.operations;



public class ListDiscoveredResourcesResponse {
    public String contentType;
    public ListDiscoveredResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidLimitException;
    public ListDiscoveredResourcesResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDiscoveredResourcesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListDiscoveredResourcesResponse listDiscoveredResourcesResponse;
    public ListDiscoveredResourcesResponse withListDiscoveredResourcesResponse(openapisdk.models.shared.ListDiscoveredResourcesResponse listDiscoveredResourcesResponse) {
        this.listDiscoveredResourcesResponse = listDiscoveredResourcesResponse;
        return this;
    }
    public Object noAvailableConfigurationRecorderException;
    public ListDiscoveredResourcesResponse withNoAvailableConfigurationRecorderException(Object noAvailableConfigurationRecorderException) {
        this.noAvailableConfigurationRecorderException = noAvailableConfigurationRecorderException;
        return this;
    }
    public Long statusCode;
    public ListDiscoveredResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListDiscoveredResourcesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}