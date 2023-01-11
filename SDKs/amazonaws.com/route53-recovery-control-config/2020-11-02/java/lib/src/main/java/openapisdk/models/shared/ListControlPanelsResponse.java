package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListControlPanelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ControlPanels")
    public ControlPanel[] controlPanels;
    public ListControlPanelsResponse withControlPanels(ControlPanel[] controlPanels) {
        this.controlPanels = controlPanels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListControlPanelsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}