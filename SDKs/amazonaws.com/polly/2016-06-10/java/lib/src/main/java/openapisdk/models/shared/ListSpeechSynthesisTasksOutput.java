package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSpeechSynthesisTasksOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListSpeechSynthesisTasksOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SynthesisTasks")
    public SynthesisTask[] synthesisTasks;
    public ListSpeechSynthesisTasksOutput withSynthesisTasks(SynthesisTask[] synthesisTasks) {
        this.synthesisTasks = synthesisTasks;
        return this;
    }
}