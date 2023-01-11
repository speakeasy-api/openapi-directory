package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeCommandsResult
 * Contains the response to a <code>DescribeCommands</code> request.
**/
public class DescribeCommandsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Commands")
    public Command[] commands;
    public DescribeCommandsResult withCommands(Command[] commands) {
        this.commands = commands;
        return this;
    }
}