package openapisdk.models.operations;



public class ListDestinationDefinitionsResponse {
    public String contentType;
    public ListDestinationDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DestinationDefinitionReadList destinationDefinitionReadList;
    public ListDestinationDefinitionsResponse withDestinationDefinitionReadList(openapisdk.models.shared.DestinationDefinitionReadList destinationDefinitionReadList) {
        this.destinationDefinitionReadList = destinationDefinitionReadList;
        return this;
    }
    public Long statusCode;
    public ListDestinationDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}