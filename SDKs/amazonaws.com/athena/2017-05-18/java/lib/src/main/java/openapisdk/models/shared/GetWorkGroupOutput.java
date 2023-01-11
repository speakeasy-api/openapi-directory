package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkGroupOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkGroup")
    public WorkGroup workGroup;
    public GetWorkGroupOutput withWorkGroup(WorkGroup workGroup) {
        this.workGroup = workGroup;
        return this;
    }
}