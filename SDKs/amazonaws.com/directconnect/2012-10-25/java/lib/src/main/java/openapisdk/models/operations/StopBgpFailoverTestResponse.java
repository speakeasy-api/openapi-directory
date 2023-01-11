package openapisdk.models.operations;



public class StopBgpFailoverTestResponse {
    public String contentType;
    public StopBgpFailoverTestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public StopBgpFailoverTestResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public StopBgpFailoverTestResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public StopBgpFailoverTestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopBgpFailoverTestResponse stopBgpFailoverTestResponse;
    public StopBgpFailoverTestResponse withStopBgpFailoverTestResponse(openapisdk.models.shared.StopBgpFailoverTestResponse stopBgpFailoverTestResponse) {
        this.stopBgpFailoverTestResponse = stopBgpFailoverTestResponse;
        return this;
    }
}