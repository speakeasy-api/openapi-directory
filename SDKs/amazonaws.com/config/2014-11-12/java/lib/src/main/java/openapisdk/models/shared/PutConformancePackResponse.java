package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutConformancePackResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConformancePackArn")
    public String conformancePackArn;
    public PutConformancePackResponse withConformancePackArn(String conformancePackArn) {
        this.conformancePackArn = conformancePackArn;
        return this;
    }
}