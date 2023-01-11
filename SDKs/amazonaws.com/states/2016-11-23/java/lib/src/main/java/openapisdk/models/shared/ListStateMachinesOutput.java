package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListStateMachinesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListStateMachinesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("stateMachines")
    public StateMachineListItem[] stateMachines;
    public ListStateMachinesOutput withStateMachines(StateMachineListItem[] stateMachines) {
        this.stateMachines = stateMachines;
        return this;
    }
}