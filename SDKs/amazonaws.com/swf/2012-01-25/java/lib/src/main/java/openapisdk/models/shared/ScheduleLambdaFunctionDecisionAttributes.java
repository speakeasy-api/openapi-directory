package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScheduleLambdaFunctionDecisionAttributes
 * Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.
**/
public class ScheduleLambdaFunctionDecisionAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public String control;
    public ScheduleLambdaFunctionDecisionAttributes withControl(String control) {
        this.control = control;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ScheduleLambdaFunctionDecisionAttributes withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public ScheduleLambdaFunctionDecisionAttributes withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ScheduleLambdaFunctionDecisionAttributes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startToCloseTimeout")
    public String startToCloseTimeout;
    public ScheduleLambdaFunctionDecisionAttributes withStartToCloseTimeout(String startToCloseTimeout) {
        this.startToCloseTimeout = startToCloseTimeout;
        return this;
    }
}