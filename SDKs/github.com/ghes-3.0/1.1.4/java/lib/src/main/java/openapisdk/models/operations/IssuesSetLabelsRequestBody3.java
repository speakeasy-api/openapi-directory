package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesSetLabelsRequestBody3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public IssuesSetLabelsRequestBody3Labels[] labels;
    public IssuesSetLabelsRequestBody3 withLabels(IssuesSetLabelsRequestBody3Labels[] labels) {
        this.labels = labels;
        return this;
    }
}