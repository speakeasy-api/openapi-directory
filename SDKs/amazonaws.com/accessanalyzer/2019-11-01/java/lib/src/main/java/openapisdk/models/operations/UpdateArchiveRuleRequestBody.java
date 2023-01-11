package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateArchiveRuleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateArchiveRuleRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("filter")
    public java.util.Map<String, openapisdk.models.shared.Criterion> filter;
    public UpdateArchiveRuleRequestBody withFilter(java.util.Map<String, openapisdk.models.shared.Criterion> filter) {
        this.filter = filter;
        return this;
    }
}