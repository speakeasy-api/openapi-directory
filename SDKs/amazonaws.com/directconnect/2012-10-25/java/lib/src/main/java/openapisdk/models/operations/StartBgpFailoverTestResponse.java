package openapisdk.models.operations;



public class StartBgpFailoverTestResponse {
    public String contentType;
    public StartBgpFailoverTestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public StartBgpFailoverTestResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public StartBgpFailoverTestResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public openapisdk.models.shared.StartBgpFailoverTestResponse startBgpFailoverTestResponse;
    public StartBgpFailoverTestResponse withStartBgpFailoverTestResponse(openapisdk.models.shared.StartBgpFailoverTestResponse startBgpFailoverTestResponse) {
        this.startBgpFailoverTestResponse = startBgpFailoverTestResponse;
        return this;
    }
    public Long statusCode;
    public StartBgpFailoverTestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}