package openapisdk.models.operations;



public class ListSchemaExtensionsResponse {
    public Object clientException;
    public ListSchemaExtensionsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListSchemaExtensionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public ListSchemaExtensionsResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListSchemaExtensionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListSchemaExtensionsResult listSchemaExtensionsResult;
    public ListSchemaExtensionsResponse withListSchemaExtensionsResult(openapisdk.models.shared.ListSchemaExtensionsResult listSchemaExtensionsResult) {
        this.listSchemaExtensionsResult = listSchemaExtensionsResult;
        return this;
    }
    public Object serviceException;
    public ListSchemaExtensionsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListSchemaExtensionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}