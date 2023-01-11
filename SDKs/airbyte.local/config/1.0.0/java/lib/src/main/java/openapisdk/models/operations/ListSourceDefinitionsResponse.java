package openapisdk.models.operations;



public class ListSourceDefinitionsResponse {
    public String contentType;
    public ListSourceDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SourceDefinitionReadList sourceDefinitionReadList;
    public ListSourceDefinitionsResponse withSourceDefinitionReadList(openapisdk.models.shared.SourceDefinitionReadList sourceDefinitionReadList) {
        this.sourceDefinitionReadList = sourceDefinitionReadList;
        return this;
    }
    public Long statusCode;
    public ListSourceDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}