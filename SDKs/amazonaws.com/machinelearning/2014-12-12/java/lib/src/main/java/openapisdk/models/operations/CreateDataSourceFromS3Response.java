package openapisdk.models.operations;



public class CreateDataSourceFromS3Response {
    public String contentType;
    public CreateDataSourceFromS3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDataSourceFromS3Output createDataSourceFromS3Output;
    public CreateDataSourceFromS3Response withCreateDataSourceFromS3Output(openapisdk.models.shared.CreateDataSourceFromS3Output createDataSourceFromS3Output) {
        this.createDataSourceFromS3Output = createDataSourceFromS3Output;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateDataSourceFromS3Response withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public CreateDataSourceFromS3Response withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public CreateDataSourceFromS3Response withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public CreateDataSourceFromS3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}