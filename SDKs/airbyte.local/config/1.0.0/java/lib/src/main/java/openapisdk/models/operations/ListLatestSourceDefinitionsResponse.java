package openapisdk.models.operations;



public class ListLatestSourceDefinitionsResponse {
    public String contentType;
    public ListLatestSourceDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SourceDefinitionReadList sourceDefinitionReadList;
    public ListLatestSourceDefinitionsResponse withSourceDefinitionReadList(openapisdk.models.shared.SourceDefinitionReadList sourceDefinitionReadList) {
        this.sourceDefinitionReadList = sourceDefinitionReadList;
        return this;
    }
    public Long statusCode;
    public ListLatestSourceDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}