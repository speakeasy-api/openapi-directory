package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateHsmResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hsm")
    public Hsm hsm;
    public CreateHsmResponse withHsm(Hsm hsm) {
        this.hsm = hsm;
        return this;
    }
}