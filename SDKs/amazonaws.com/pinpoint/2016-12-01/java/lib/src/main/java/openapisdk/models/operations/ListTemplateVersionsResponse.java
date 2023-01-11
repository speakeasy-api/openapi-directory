package openapisdk.models.operations;



public class ListTemplateVersionsResponse {
    public Object badRequestException;
    public ListTemplateVersionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListTemplateVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListTemplateVersionsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public ListTemplateVersionsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListTemplateVersionsResponse listTemplateVersionsResponse;
    public ListTemplateVersionsResponse withListTemplateVersionsResponse(openapisdk.models.shared.ListTemplateVersionsResponse listTemplateVersionsResponse) {
        this.listTemplateVersionsResponse = listTemplateVersionsResponse;
        return this;
    }
    public Object methodNotAllowedException;
    public ListTemplateVersionsResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public ListTemplateVersionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public ListTemplateVersionsResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public ListTemplateVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListTemplateVersionsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}