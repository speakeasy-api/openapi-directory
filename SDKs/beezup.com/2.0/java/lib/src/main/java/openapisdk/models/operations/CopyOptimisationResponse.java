package openapisdk.models.operations;



public class CopyOptimisationResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CopyOptimisationResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public CopyOptimisationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CopyOptimisationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CopyOptimisationResponse copyOptimisationResponse;
    public CopyOptimisationResponse withCopyOptimisationResponse(openapisdk.models.shared.CopyOptimisationResponse copyOptimisationResponse) {
        this.copyOptimisationResponse = copyOptimisationResponse;
        return this;
    }
}