package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateAccessLogsResult
 *  The result structure for the generate access logs request. 
**/
public class GenerateAccessLogsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logUrl")
    public String logUrl;
    public GenerateAccessLogsResult withLogUrl(String logUrl) {
        this.logUrl = logUrl;
        return this;
    }
}