package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartDeviceAuthorizationRequestBody {
    @JsonProperty("clientId")
    public String clientId;
    public StartDeviceAuthorizationRequestBody withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("clientSecret")
    public String clientSecret;
    public StartDeviceAuthorizationRequestBody withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonProperty("startUrl")
    public String startUrl;
    public StartDeviceAuthorizationRequestBody withStartUrl(String startUrl) {
        this.startUrl = startUrl;
        return this;
    }
}