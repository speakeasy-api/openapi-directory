package openapisdk.models.operations;



public class GetQueryResultsResponse {
    public String contentType;
    public GetQueryResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetQueryResultsOutput getQueryResultsOutput;
    public GetQueryResultsResponse withGetQueryResultsOutput(openapisdk.models.shared.GetQueryResultsOutput getQueryResultsOutput) {
        this.getQueryResultsOutput = getQueryResultsOutput;
        return this;
    }
    public Object internalServerException;
    public GetQueryResultsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public GetQueryResultsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetQueryResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}