package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson {
    @JsonProperty("runners")
    public openapisdk.models.shared.Runner[] runners;
    public EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson withRunners(openapisdk.models.shared.Runner[] runners) {
        this.runners = runners;
        return this;
    }
    @JsonProperty("total_count")
    public Double totalCount;
    public EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson withTotalCount(Double totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}