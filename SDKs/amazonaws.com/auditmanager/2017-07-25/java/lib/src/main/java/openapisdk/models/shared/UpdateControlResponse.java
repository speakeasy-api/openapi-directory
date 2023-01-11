package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateControlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public Control control;
    public UpdateControlResponse withControl(Control control) {
        this.control = control;
        return this;
    }
}