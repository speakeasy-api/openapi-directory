package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeControlPanelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ControlPanel")
    public ControlPanel controlPanel;
    public DescribeControlPanelResponse withControlPanel(ControlPanel controlPanel) {
        this.controlPanel = controlPanel;
        return this;
    }
}