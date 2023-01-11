package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountUsage
 * The number of functions and amount of storage in use.
**/
public class AccountUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionCount")
    public Long functionCount;
    public AccountUsage withFunctionCount(Long functionCount) {
        this.functionCount = functionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCodeSize")
    public Long totalCodeSize;
    public AccountUsage withTotalCodeSize(Long totalCodeSize) {
        this.totalCodeSize = totalCodeSize;
        return this;
    }
}