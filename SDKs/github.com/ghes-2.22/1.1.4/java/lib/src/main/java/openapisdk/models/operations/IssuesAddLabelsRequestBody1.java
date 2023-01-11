package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesAddLabelsRequestBody1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public IssuesAddLabelsRequestBody1 withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
}