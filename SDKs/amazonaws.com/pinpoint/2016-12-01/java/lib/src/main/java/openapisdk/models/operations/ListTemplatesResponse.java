package openapisdk.models.operations;



public class ListTemplatesResponse {
    public Object badRequestException;
    public ListTemplatesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListTemplatesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public ListTemplatesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListTemplatesResponse listTemplatesResponse;
    public ListTemplatesResponse withListTemplatesResponse(openapisdk.models.shared.ListTemplatesResponse listTemplatesResponse) {
        this.listTemplatesResponse = listTemplatesResponse;
        return this;
    }
    public Object methodNotAllowedException;
    public ListTemplatesResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Long statusCode;
    public ListTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListTemplatesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}