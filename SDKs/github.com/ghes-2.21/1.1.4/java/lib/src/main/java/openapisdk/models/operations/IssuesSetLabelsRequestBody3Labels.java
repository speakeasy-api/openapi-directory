package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IssuesSetLabelsRequestBody3Labels {
    @JsonProperty("name")
    public String name;
    public IssuesSetLabelsRequestBody3Labels withName(String name) {
        this.name = name;
        return this;
    }
}