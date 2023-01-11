package openapisdk.models.operations;



public class ListLatestDestinationDefinitionsResponse {
    public String contentType;
    public ListLatestDestinationDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DestinationDefinitionReadList destinationDefinitionReadList;
    public ListLatestDestinationDefinitionsResponse withDestinationDefinitionReadList(openapisdk.models.shared.DestinationDefinitionReadList destinationDefinitionReadList) {
        this.destinationDefinitionReadList = destinationDefinitionReadList;
        return this;
    }
    public Long statusCode;
    public ListLatestDestinationDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}