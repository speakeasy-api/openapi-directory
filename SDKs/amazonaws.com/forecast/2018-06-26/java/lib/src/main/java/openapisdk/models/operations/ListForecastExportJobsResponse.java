package openapisdk.models.operations;



public class ListForecastExportJobsResponse {
    public String contentType;
    public ListForecastExportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListForecastExportJobsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListForecastExportJobsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListForecastExportJobsResponse listForecastExportJobsResponse;
    public ListForecastExportJobsResponse withListForecastExportJobsResponse(openapisdk.models.shared.ListForecastExportJobsResponse listForecastExportJobsResponse) {
        this.listForecastExportJobsResponse = listForecastExportJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListForecastExportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}