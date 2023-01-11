package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddLfTagsToResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Failures")
    public LfTagError[] failures;
    public AddLfTagsToResourceResponse withFailures(LfTagError[] failures) {
        this.failures = failures;
        return this;
    }
}