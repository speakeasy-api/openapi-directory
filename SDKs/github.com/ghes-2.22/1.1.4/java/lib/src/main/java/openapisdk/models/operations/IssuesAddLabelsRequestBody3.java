package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesAddLabelsRequestBody3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public IssuesAddLabelsRequestBody3Labels[] labels;
    public IssuesAddLabelsRequestBody3 withLabels(IssuesAddLabelsRequestBody3Labels[] labels) {
        this.labels = labels;
        return this;
    }
}