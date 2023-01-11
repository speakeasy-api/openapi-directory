package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVpceConfigurationsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListVpceConfigurationsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpceConfigurations")
    public VpceConfiguration[] vpceConfigurations;
    public ListVpceConfigurationsResult withVpceConfigurations(VpceConfiguration[] vpceConfigurations) {
        this.vpceConfigurations = vpceConfigurations;
        return this;
    }
}