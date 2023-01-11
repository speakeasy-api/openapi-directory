package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEulaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eula")
    public Eula eula;
    public GetEulaResponse withEula(Eula eula) {
        this.eula = eula;
        return this;
    }
}