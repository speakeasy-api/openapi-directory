package openapisdk.models.operations;



public class ListPredictorBacktestExportJobsResponse {
    public String contentType;
    public ListPredictorBacktestExportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListPredictorBacktestExportJobsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListPredictorBacktestExportJobsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListPredictorBacktestExportJobsResponse listPredictorBacktestExportJobsResponse;
    public ListPredictorBacktestExportJobsResponse withListPredictorBacktestExportJobsResponse(openapisdk.models.shared.ListPredictorBacktestExportJobsResponse listPredictorBacktestExportJobsResponse) {
        this.listPredictorBacktestExportJobsResponse = listPredictorBacktestExportJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListPredictorBacktestExportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}