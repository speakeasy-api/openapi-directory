package openapisdk.models.operations;



public class ListDatasetImportJobsResponse {
    public String contentType;
    public ListDatasetImportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListDatasetImportJobsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDatasetImportJobsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListDatasetImportJobsResponse listDatasetImportJobsResponse;
    public ListDatasetImportJobsResponse withListDatasetImportJobsResponse(openapisdk.models.shared.ListDatasetImportJobsResponse listDatasetImportJobsResponse) {
        this.listDatasetImportJobsResponse = listDatasetImportJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListDatasetImportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}