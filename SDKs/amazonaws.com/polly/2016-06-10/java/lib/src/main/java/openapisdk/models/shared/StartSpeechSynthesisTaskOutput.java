package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartSpeechSynthesisTaskOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SynthesisTask")
    public SynthesisTask synthesisTask;
    public StartSpeechSynthesisTaskOutput withSynthesisTask(SynthesisTask synthesisTask) {
        this.synthesisTask = synthesisTask;
        return this;
    }
}