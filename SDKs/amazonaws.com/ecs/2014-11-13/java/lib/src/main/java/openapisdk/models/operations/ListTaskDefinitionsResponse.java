package openapisdk.models.operations;



public class ListTaskDefinitionsResponse {
    public Object clientException;
    public ListTaskDefinitionsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListTaskDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListTaskDefinitionsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListTaskDefinitionsResponse listTaskDefinitionsResponse;
    public ListTaskDefinitionsResponse withListTaskDefinitionsResponse(openapisdk.models.shared.ListTaskDefinitionsResponse listTaskDefinitionsResponse) {
        this.listTaskDefinitionsResponse = listTaskDefinitionsResponse;
        return this;
    }
    public Object serverException;
    public ListTaskDefinitionsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public ListTaskDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}