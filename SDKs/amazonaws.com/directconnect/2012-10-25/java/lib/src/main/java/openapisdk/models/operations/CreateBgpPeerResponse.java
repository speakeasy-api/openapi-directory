package openapisdk.models.operations;



public class CreateBgpPeerResponse {
    public String contentType;
    public CreateBgpPeerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBgpPeerResponse createBGPPeerResponse;
    public CreateBgpPeerResponse withCreateBgpPeerResponse(openapisdk.models.shared.CreateBgpPeerResponse createBGPPeerResponse) {
        this.createBGPPeerResponse = createBGPPeerResponse;
        return this;
    }
    public Object directConnectClientException;
    public CreateBgpPeerResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public CreateBgpPeerResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public CreateBgpPeerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}