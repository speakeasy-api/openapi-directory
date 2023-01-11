package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IssuesAddLabelsRequestBody4 {
    @JsonProperty("name")
    public String name;
    public IssuesAddLabelsRequestBody4 withName(String name) {
        this.name = name;
        return this;
    }
}