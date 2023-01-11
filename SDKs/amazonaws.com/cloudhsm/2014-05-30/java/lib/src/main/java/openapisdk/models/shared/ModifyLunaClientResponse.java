package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifyLunaClientResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientArn")
    public String clientArn;
    public ModifyLunaClientResponse withClientArn(String clientArn) {
        this.clientArn = clientArn;
        return this;
    }
}