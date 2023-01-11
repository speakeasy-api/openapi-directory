package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLogsAggregateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=follow")
    public Boolean follow;
    public GetLogsAggregateQueryParams withFollow(Boolean follow) {
        this.follow = follow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pod_connection_timeout")
    public String podConnectionTimeout;
    public GetLogsAggregateQueryParams withPodConnectionTimeout(String podConnectionTimeout) {
        this.podConnectionTimeout = podConnectionTimeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetParameters4Enum type;
    public GetLogsAggregateQueryParams withType(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetParameters4Enum type) {
        this.type = type;
        return this;
    }
}