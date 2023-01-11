package openapisdk.models.operations;



public class ListDatasetExportJobsResponse {
    public String contentType;
    public ListDatasetExportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListDatasetExportJobsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDatasetExportJobsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListDatasetExportJobsResponse listDatasetExportJobsResponse;
    public ListDatasetExportJobsResponse withListDatasetExportJobsResponse(openapisdk.models.shared.ListDatasetExportJobsResponse listDatasetExportJobsResponse) {
        this.listDatasetExportJobsResponse = listDatasetExportJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListDatasetExportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}