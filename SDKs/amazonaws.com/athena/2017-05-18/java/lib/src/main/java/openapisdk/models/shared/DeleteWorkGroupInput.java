package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteWorkGroupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecursiveDeleteOption")
    public Boolean recursiveDeleteOption;
    public DeleteWorkGroupInput withRecursiveDeleteOption(Boolean recursiveDeleteOption) {
        this.recursiveDeleteOption = recursiveDeleteOption;
        return this;
    }
    @JsonProperty("WorkGroup")
    public String workGroup;
    public DeleteWorkGroupInput withWorkGroup(String workGroup) {
        this.workGroup = workGroup;
        return this;
    }
}