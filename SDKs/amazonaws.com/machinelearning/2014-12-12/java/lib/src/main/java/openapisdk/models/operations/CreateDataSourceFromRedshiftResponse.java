package openapisdk.models.operations;



public class CreateDataSourceFromRedshiftResponse {
    public String contentType;
    public CreateDataSourceFromRedshiftResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDataSourceFromRedshiftOutput createDataSourceFromRedshiftOutput;
    public CreateDataSourceFromRedshiftResponse withCreateDataSourceFromRedshiftOutput(openapisdk.models.shared.CreateDataSourceFromRedshiftOutput createDataSourceFromRedshiftOutput) {
        this.createDataSourceFromRedshiftOutput = createDataSourceFromRedshiftOutput;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateDataSourceFromRedshiftResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public CreateDataSourceFromRedshiftResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public CreateDataSourceFromRedshiftResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public CreateDataSourceFromRedshiftResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}