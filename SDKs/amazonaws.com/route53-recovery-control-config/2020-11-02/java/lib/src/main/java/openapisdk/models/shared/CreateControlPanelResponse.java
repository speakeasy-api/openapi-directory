package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateControlPanelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ControlPanel")
    public ControlPanel controlPanel;
    public CreateControlPanelResponse withControlPanel(ControlPanel controlPanel) {
        this.controlPanel = controlPanel;
        return this;
    }
}