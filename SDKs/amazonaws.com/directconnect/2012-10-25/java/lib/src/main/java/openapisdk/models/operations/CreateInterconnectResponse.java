package openapisdk.models.operations;



public class CreateInterconnectResponse {
    public String contentType;
    public CreateInterconnectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public CreateInterconnectResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public CreateInterconnectResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Object duplicateTagKeysException;
    public CreateInterconnectResponse withDuplicateTagKeysException(Object duplicateTagKeysException) {
        this.duplicateTagKeysException = duplicateTagKeysException;
        return this;
    }
    public openapisdk.models.shared.Interconnect interconnect;
    public CreateInterconnectResponse withInterconnect(openapisdk.models.shared.Interconnect interconnect) {
        this.interconnect = interconnect;
        return this;
    }
    public Long statusCode;
    public CreateInterconnectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public CreateInterconnectResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}