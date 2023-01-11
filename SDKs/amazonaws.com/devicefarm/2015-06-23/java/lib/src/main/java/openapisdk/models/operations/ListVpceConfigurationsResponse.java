package openapisdk.models.operations;



public class ListVpceConfigurationsResponse {
    public Object argumentException;
    public ListVpceConfigurationsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListVpceConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVpceConfigurationsResult listVPCEConfigurationsResult;
    public ListVpceConfigurationsResponse withListVpceConfigurationsResult(openapisdk.models.shared.ListVpceConfigurationsResult listVPCEConfigurationsResult) {
        this.listVPCEConfigurationsResult = listVPCEConfigurationsResult;
        return this;
    }
    public Object serviceAccountException;
    public ListVpceConfigurationsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListVpceConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}