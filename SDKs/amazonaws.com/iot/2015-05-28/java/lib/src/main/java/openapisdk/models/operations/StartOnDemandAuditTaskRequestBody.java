package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartOnDemandAuditTaskRequestBody {
    @JsonProperty("targetCheckNames")
    public String[] targetCheckNames;
    public StartOnDemandAuditTaskRequestBody withTargetCheckNames(String[] targetCheckNames) {
        this.targetCheckNames = targetCheckNames;
        return this;
    }
}