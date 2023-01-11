package openapisdk.models.operations;



public class ListResourceTagsResponse {
    public String contentType;
    public ListResourceTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public ListResourceTagsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidMarkerException;
    public ListResourceTagsResponse withInvalidMarkerException(Object invalidMarkerException) {
        this.invalidMarkerException = invalidMarkerException;
        return this;
    }
    public Object kmsInternalException;
    public ListResourceTagsResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public openapisdk.models.shared.ListResourceTagsResponse listResourceTagsResponse;
    public ListResourceTagsResponse withListResourceTagsResponse(openapisdk.models.shared.ListResourceTagsResponse listResourceTagsResponse) {
        this.listResourceTagsResponse = listResourceTagsResponse;
        return this;
    }
    public Object notFoundException;
    public ListResourceTagsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListResourceTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}