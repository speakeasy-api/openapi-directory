package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Schedule
 * The schedule for when to trigger an update.
**/
public class Schedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expression")
    public String expression;
    public Schedule withExpression(String expression) {
        this.expression = expression;
        return this;
    }
}