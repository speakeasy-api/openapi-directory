package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runners")
    public openapisdk.models.shared.Runner[] runners;
    public EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson withRunners(openapisdk.models.shared.Runner[] runners) {
        this.runners = runners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_count")
    public Double totalCount;
    public EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson withTotalCount(Double totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}