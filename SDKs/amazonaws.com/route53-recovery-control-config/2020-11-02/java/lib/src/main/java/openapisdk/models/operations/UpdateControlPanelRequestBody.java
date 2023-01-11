package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateControlPanelRequestBody {
    @JsonProperty("ControlPanelArn")
    public String controlPanelArn;
    public UpdateControlPanelRequestBody withControlPanelArn(String controlPanelArn) {
        this.controlPanelArn = controlPanelArn;
        return this;
    }
    @JsonProperty("ControlPanelName")
    public String controlPanelName;
    public UpdateControlPanelRequestBody withControlPanelName(String controlPanelName) {
        this.controlPanelName = controlPanelName;
        return this;
    }
}