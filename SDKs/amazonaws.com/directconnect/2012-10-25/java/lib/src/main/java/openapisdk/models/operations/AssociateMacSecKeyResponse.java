package openapisdk.models.operations;



public class AssociateMacSecKeyResponse {
    public openapisdk.models.shared.AssociateMacSecKeyResponse associateMacSecKeyResponse;
    public AssociateMacSecKeyResponse withAssociateMacSecKeyResponse(openapisdk.models.shared.AssociateMacSecKeyResponse associateMacSecKeyResponse) {
        this.associateMacSecKeyResponse = associateMacSecKeyResponse;
        return this;
    }
    public String contentType;
    public AssociateMacSecKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public AssociateMacSecKeyResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public AssociateMacSecKeyResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public AssociateMacSecKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}