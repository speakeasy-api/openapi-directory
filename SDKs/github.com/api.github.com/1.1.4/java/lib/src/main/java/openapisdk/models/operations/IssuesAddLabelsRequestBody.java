package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IssuesAddLabelsRequestBody {
    @JsonProperty("labels")
    public String[] labels;
    public IssuesAddLabelsRequestBody withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
}