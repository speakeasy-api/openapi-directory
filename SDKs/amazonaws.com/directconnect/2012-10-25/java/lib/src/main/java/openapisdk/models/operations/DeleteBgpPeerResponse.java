package openapisdk.models.operations;



public class DeleteBgpPeerResponse {
    public String contentType;
    public DeleteBgpPeerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBgpPeerResponse deleteBGPPeerResponse;
    public DeleteBgpPeerResponse withDeleteBgpPeerResponse(openapisdk.models.shared.DeleteBgpPeerResponse deleteBGPPeerResponse) {
        this.deleteBGPPeerResponse = deleteBGPPeerResponse;
        return this;
    }
    public Object directConnectClientException;
    public DeleteBgpPeerResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DeleteBgpPeerResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DeleteBgpPeerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}