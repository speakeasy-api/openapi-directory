package openapisdk.models.operations;



public class TestEventPatternResponse {
    public String contentType;
    public TestEventPatternResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public TestEventPatternResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidEventPatternException;
    public TestEventPatternResponse withInvalidEventPatternException(Object invalidEventPatternException) {
        this.invalidEventPatternException = invalidEventPatternException;
        return this;
    }
    public Long statusCode;
    public TestEventPatternResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestEventPatternResponse testEventPatternResponse;
    public TestEventPatternResponse withTestEventPatternResponse(openapisdk.models.shared.TestEventPatternResponse testEventPatternResponse) {
        this.testEventPatternResponse = testEventPatternResponse;
        return this;
    }
}