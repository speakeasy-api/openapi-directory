package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateComputerResult
 * Contains the results for the <a>CreateComputer</a> operation.
**/
public class CreateComputerResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Computer")
    public Computer computer;
    public CreateComputerResult withComputer(Computer computer) {
        this.computer = computer;
        return this;
    }
}