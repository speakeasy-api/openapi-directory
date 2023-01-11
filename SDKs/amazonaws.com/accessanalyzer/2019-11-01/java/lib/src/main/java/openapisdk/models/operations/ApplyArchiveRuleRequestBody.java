package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplyArchiveRuleRequestBody {
    @JsonProperty("analyzerArn")
    public String analyzerArn;
    public ApplyArchiveRuleRequestBody withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public ApplyArchiveRuleRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("ruleName")
    public String ruleName;
    public ApplyArchiveRuleRequestBody withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}