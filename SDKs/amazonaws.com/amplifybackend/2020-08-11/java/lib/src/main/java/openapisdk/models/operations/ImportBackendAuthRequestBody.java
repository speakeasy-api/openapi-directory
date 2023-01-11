package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportBackendAuthRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityPoolId")
    public String identityPoolId;
    public ImportBackendAuthRequestBody withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonProperty("nativeClientId")
    public String nativeClientId;
    public ImportBackendAuthRequestBody withNativeClientId(String nativeClientId) {
        this.nativeClientId = nativeClientId;
        return this;
    }
    @JsonProperty("userPoolId")
    public String userPoolId;
    public ImportBackendAuthRequestBody withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("webClientId")
    public String webClientId;
    public ImportBackendAuthRequestBody withWebClientId(String webClientId) {
        this.webClientId = webClientId;
        return this;
    }
}