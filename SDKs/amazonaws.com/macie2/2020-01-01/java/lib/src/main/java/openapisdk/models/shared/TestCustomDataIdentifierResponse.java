package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestCustomDataIdentifierResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchCount")
    public Long matchCount;
    public TestCustomDataIdentifierResponse withMatchCount(Long matchCount) {
        this.matchCount = matchCount;
        return this;
    }
}