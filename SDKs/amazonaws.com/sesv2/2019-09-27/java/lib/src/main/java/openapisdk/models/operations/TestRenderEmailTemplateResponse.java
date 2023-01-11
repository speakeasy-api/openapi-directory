package openapisdk.models.operations;



public class TestRenderEmailTemplateResponse {
    public Object badRequestException;
    public TestRenderEmailTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public TestRenderEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public TestRenderEmailTemplateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public TestRenderEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestRenderEmailTemplateResponse testRenderEmailTemplateResponse;
    public TestRenderEmailTemplateResponse withTestRenderEmailTemplateResponse(openapisdk.models.shared.TestRenderEmailTemplateResponse testRenderEmailTemplateResponse) {
        this.testRenderEmailTemplateResponse = testRenderEmailTemplateResponse;
        return this;
    }
    public Object tooManyRequestsException;
    public TestRenderEmailTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}