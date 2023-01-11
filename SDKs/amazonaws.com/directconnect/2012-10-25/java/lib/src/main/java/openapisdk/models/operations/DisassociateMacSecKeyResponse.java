package openapisdk.models.operations;



public class DisassociateMacSecKeyResponse {
    public String contentType;
    public DisassociateMacSecKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DisassociateMacSecKeyResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DisassociateMacSecKeyResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public openapisdk.models.shared.DisassociateMacSecKeyResponse disassociateMacSecKeyResponse;
    public DisassociateMacSecKeyResponse withDisassociateMacSecKeyResponse(openapisdk.models.shared.DisassociateMacSecKeyResponse disassociateMacSecKeyResponse) {
        this.disassociateMacSecKeyResponse = disassociateMacSecKeyResponse;
        return this;
    }
    public Long statusCode;
    public DisassociateMacSecKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}