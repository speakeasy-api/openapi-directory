package openapisdk.models.operations;



public class GetConnectorDefinitionVersionResponse {
    public Object badRequestException;
    public GetConnectorDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetConnectorDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetConnectorDefinitionVersionResponse getConnectorDefinitionVersionResponse;
    public GetConnectorDefinitionVersionResponse withGetConnectorDefinitionVersionResponse(openapisdk.models.shared.GetConnectorDefinitionVersionResponse getConnectorDefinitionVersionResponse) {
        this.getConnectorDefinitionVersionResponse = getConnectorDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public GetConnectorDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}