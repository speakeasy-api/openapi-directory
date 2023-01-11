package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutEmailIdentityDkimAttributesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningEnabled")
    public Boolean signingEnabled;
    public PutEmailIdentityDkimAttributesRequestBody withSigningEnabled(Boolean signingEnabled) {
        this.signingEnabled = signingEnabled;
        return this;
    }
}