package openapisdk.models.operations;



public class CreateDataSourceFromRdsResponse {
    public String contentType;
    public CreateDataSourceFromRdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDataSourceFromRdsOutput createDataSourceFromRDSOutput;
    public CreateDataSourceFromRdsResponse withCreateDataSourceFromRdsOutput(openapisdk.models.shared.CreateDataSourceFromRdsOutput createDataSourceFromRDSOutput) {
        this.createDataSourceFromRDSOutput = createDataSourceFromRDSOutput;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateDataSourceFromRdsResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public CreateDataSourceFromRdsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public CreateDataSourceFromRdsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public CreateDataSourceFromRdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}