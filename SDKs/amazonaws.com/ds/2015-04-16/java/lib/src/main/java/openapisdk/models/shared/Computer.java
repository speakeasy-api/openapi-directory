package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Computer
 * Contains information about a computer account in a directory.
**/
public class Computer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputerAttributes")
    public Attribute[] computerAttributes;
    public Computer withComputerAttributes(Attribute[] computerAttributes) {
        this.computerAttributes = computerAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputerId")
    public String computerId;
    public Computer withComputerId(String computerId) {
        this.computerId = computerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputerName")
    public String computerName;
    public Computer withComputerName(String computerName) {
        this.computerName = computerName;
        return this;
    }
}