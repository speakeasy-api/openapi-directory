package openapisdk.models.operations;



public class DeleteInterconnectResponse {
    public String contentType;
    public DeleteInterconnectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteInterconnectResponse deleteInterconnectResponse;
    public DeleteInterconnectResponse withDeleteInterconnectResponse(openapisdk.models.shared.DeleteInterconnectResponse deleteInterconnectResponse) {
        this.deleteInterconnectResponse = deleteInterconnectResponse;
        return this;
    }
    public Object directConnectClientException;
    public DeleteInterconnectResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DeleteInterconnectResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DeleteInterconnectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}