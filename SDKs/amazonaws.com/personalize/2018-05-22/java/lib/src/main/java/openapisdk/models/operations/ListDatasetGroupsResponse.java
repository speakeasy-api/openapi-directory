package openapisdk.models.operations;



public class ListDatasetGroupsResponse {
    public String contentType;
    public ListDatasetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDatasetGroupsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListDatasetGroupsResponse listDatasetGroupsResponse;
    public ListDatasetGroupsResponse withListDatasetGroupsResponse(openapisdk.models.shared.ListDatasetGroupsResponse listDatasetGroupsResponse) {
        this.listDatasetGroupsResponse = listDatasetGroupsResponse;
        return this;
    }
    public Long statusCode;
    public ListDatasetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}