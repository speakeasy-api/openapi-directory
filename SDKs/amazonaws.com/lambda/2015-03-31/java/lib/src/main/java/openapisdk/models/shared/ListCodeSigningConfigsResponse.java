package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCodeSigningConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeSigningConfigs")
    public CodeSigningConfig[] codeSigningConfigs;
    public ListCodeSigningConfigsResponse withCodeSigningConfigs(CodeSigningConfig[] codeSigningConfigs) {
        this.codeSigningConfigs = codeSigningConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListCodeSigningConfigsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}