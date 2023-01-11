package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartPipelineExecutionInput
 * Represents the input of a <code>StartPipelineExecution</code> action.
**/
public class StartPipelineExecutionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public StartPipelineExecutionInput withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public StartPipelineExecutionInput withName(String name) {
        this.name = name;
        return this;
    }
}