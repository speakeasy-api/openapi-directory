package openapisdk.models.operations;



public class MergeProfilesResponse {
    public Object badRequestException;
    public MergeProfilesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public MergeProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public MergeProfilesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.MergeProfilesResponse mergeProfilesResponse;
    public MergeProfilesResponse withMergeProfilesResponse(openapisdk.models.shared.MergeProfilesResponse mergeProfilesResponse) {
        this.mergeProfilesResponse = mergeProfilesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public MergeProfilesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public MergeProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public MergeProfilesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}