package openapisdk.models.operations;



public class GetIntrospectionSchemaResponse {
    public String contentType;
    public GetIntrospectionSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIntrospectionSchemaResponse getIntrospectionSchemaResponse;
    public GetIntrospectionSchemaResponse withGetIntrospectionSchemaResponse(openapisdk.models.shared.GetIntrospectionSchemaResponse getIntrospectionSchemaResponse) {
        this.getIntrospectionSchemaResponse = getIntrospectionSchemaResponse;
        return this;
    }
    public Object graphQLSchemaException;
    public GetIntrospectionSchemaResponse withGraphQlSchemaException(Object graphQLSchemaException) {
        this.graphQLSchemaException = graphQLSchemaException;
        return this;
    }
    public Object internalFailureException;
    public GetIntrospectionSchemaResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public GetIntrospectionSchemaResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetIntrospectionSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetIntrospectionSchemaResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}