package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposUpdateStatusCheckProtectionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contexts")
    public String[] contexts;
    public ReposUpdateStatusCheckProtectionRequestBody withContexts(String[] contexts) {
        this.contexts = contexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strict")
    public Boolean strict;
    public ReposUpdateStatusCheckProtectionRequestBody withStrict(Boolean strict) {
        this.strict = strict;
        return this;
    }
}