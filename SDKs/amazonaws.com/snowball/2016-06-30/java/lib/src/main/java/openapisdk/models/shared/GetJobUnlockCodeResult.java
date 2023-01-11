package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetJobUnlockCodeResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnlockCode")
    public String unlockCode;
    public GetJobUnlockCodeResult withUnlockCode(String unlockCode) {
        this.unlockCode = unlockCode;
        return this;
    }
}