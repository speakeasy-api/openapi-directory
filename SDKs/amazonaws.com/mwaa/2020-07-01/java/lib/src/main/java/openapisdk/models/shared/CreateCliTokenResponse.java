package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCliTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CliToken")
    public String cliToken;
    public CreateCliTokenResponse withCliToken(String cliToken) {
        this.cliToken = cliToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebServerHostname")
    public String webServerHostname;
    public CreateCliTokenResponse withWebServerHostname(String webServerHostname) {
        this.webServerHostname = webServerHostname;
        return this;
    }
}