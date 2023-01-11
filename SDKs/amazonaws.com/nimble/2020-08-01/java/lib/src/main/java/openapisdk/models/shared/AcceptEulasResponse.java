package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcceptEulasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eulaAcceptances")
    public EulaAcceptance[] eulaAcceptances;
    public AcceptEulasResponse withEulaAcceptances(EulaAcceptance[] eulaAcceptances) {
        this.eulaAcceptances = eulaAcceptances;
        return this;
    }
}