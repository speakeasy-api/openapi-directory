package openapisdk.models.operations;



public class ListTaskDefinitionFamiliesResponse {
    public Object clientException;
    public ListTaskDefinitionFamiliesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListTaskDefinitionFamiliesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListTaskDefinitionFamiliesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListTaskDefinitionFamiliesResponse listTaskDefinitionFamiliesResponse;
    public ListTaskDefinitionFamiliesResponse withListTaskDefinitionFamiliesResponse(openapisdk.models.shared.ListTaskDefinitionFamiliesResponse listTaskDefinitionFamiliesResponse) {
        this.listTaskDefinitionFamiliesResponse = listTaskDefinitionFamiliesResponse;
        return this;
    }
    public Object serverException;
    public ListTaskDefinitionFamiliesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public ListTaskDefinitionFamiliesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}