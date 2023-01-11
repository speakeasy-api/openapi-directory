package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetWorkGroupInput {
    @JsonProperty("WorkGroup")
    public String workGroup;
    public GetWorkGroupInput withWorkGroup(String workGroup) {
        this.workGroup = workGroup;
        return this;
    }
}