package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWebLoginTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebServerHostname")
    public String webServerHostname;
    public CreateWebLoginTokenResponse withWebServerHostname(String webServerHostname) {
        this.webServerHostname = webServerHostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebToken")
    public String webToken;
    public CreateWebLoginTokenResponse withWebToken(String webToken) {
        this.webToken = webToken;
        return this;
    }
}