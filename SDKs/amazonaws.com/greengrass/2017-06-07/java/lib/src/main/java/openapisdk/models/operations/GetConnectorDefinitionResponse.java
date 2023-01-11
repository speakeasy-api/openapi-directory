package openapisdk.models.operations;



public class GetConnectorDefinitionResponse {
    public Object badRequestException;
    public GetConnectorDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetConnectorDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetConnectorDefinitionResponse getConnectorDefinitionResponse;
    public GetConnectorDefinitionResponse withGetConnectorDefinitionResponse(openapisdk.models.shared.GetConnectorDefinitionResponse getConnectorDefinitionResponse) {
        this.getConnectorDefinitionResponse = getConnectorDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public GetConnectorDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}