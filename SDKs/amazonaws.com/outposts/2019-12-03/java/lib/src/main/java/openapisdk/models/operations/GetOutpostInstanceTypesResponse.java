package openapisdk.models.operations;



public class GetOutpostInstanceTypesResponse {
    public Object accessDeniedException;
    public GetOutpostInstanceTypesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetOutpostInstanceTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOutpostInstanceTypesOutput getOutpostInstanceTypesOutput;
    public GetOutpostInstanceTypesResponse withGetOutpostInstanceTypesOutput(openapisdk.models.shared.GetOutpostInstanceTypesOutput getOutpostInstanceTypesOutput) {
        this.getOutpostInstanceTypesOutput = getOutpostInstanceTypesOutput;
        return this;
    }
    public Object internalServerException;
    public GetOutpostInstanceTypesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object notFoundException;
    public GetOutpostInstanceTypesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetOutpostInstanceTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetOutpostInstanceTypesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}