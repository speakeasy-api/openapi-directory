package openapisdk.models.operations;



public class CreateLocationS3Response {
    public String contentType;
    public CreateLocationS3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLocationS3Response createLocationS3Response;
    public CreateLocationS3Response withCreateLocationS3Response(openapisdk.models.shared.CreateLocationS3Response createLocationS3Response) {
        this.createLocationS3Response = createLocationS3Response;
        return this;
    }
    public Object internalException;
    public CreateLocationS3Response withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public CreateLocationS3Response withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateLocationS3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}