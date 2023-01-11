package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IssuesSetLabelsRequestBody4 {
    @JsonProperty("name")
    public String name;
    public IssuesSetLabelsRequestBody4 withName(String name) {
        this.name = name;
        return this;
    }
}