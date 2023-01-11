package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListJobTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTemplates")
    public JobTemplateSummary[] jobTemplates;
    public ListJobTemplatesResponse withJobTemplates(JobTemplateSummary[] jobTemplates) {
        this.jobTemplates = jobTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListJobTemplatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}