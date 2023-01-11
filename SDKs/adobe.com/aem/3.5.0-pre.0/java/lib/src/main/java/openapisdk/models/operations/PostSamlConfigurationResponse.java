package openapisdk.models.operations;



public class PostSamlConfigurationResponse {
    public String contentType;
    public PostSamlConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String samlConfigurationInfo;
    public PostSamlConfigurationResponse withSamlConfigurationInfo(String samlConfigurationInfo) {
        this.samlConfigurationInfo = samlConfigurationInfo;
        return this;
    }
    public Long statusCode;
    public PostSamlConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String postSamlConfiguration302TextPlainString;
    public PostSamlConfigurationResponse withPostSamlConfiguration302TextPlainString(String postSamlConfiguration302TextPlainString) {
        this.postSamlConfiguration302TextPlainString = postSamlConfiguration302TextPlainString;
        return this;
    }
    public String postSamlConfigurationDefaultTextPlainString;
    public PostSamlConfigurationResponse withPostSamlConfigurationDefaultTextPlainString(String postSamlConfigurationDefaultTextPlainString) {
        this.postSamlConfigurationDefaultTextPlainString = postSamlConfigurationDefaultTextPlainString;
        return this;
    }
}