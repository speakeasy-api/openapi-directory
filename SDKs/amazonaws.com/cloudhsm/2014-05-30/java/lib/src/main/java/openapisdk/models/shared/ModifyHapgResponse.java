package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifyHapgResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HapgArn")
    public String hapgArn;
    public ModifyHapgResponse withHapgArn(String hapgArn) {
        this.hapgArn = hapgArn;
        return this;
    }
}