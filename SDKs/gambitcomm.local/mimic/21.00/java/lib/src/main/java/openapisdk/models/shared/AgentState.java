package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AgentState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentNum")
    public Integer agentNum;
    public AgentState withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public Integer state;
    public AgentState withState(Integer state) {
        this.state = state;
        return this;
    }
}