package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Code
 * Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation.
**/
public class Code {
    @JsonProperty("destination")
    public CodeDestination destination;
    public Code withDestination(CodeDestination destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("source")
    public CodeSource source;
    public Code withSource(CodeSource source) {
        this.source = source;
        return this;
    }
}