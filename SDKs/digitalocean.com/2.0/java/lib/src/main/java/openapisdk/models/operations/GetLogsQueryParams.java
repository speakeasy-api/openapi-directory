package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=follow")
    public Boolean follow;
    public GetLogsQueryParams withFollow(Boolean follow) {
        this.follow = follow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pod_connection_timeout")
    public String podConnectionTimeout;
    public GetLogsQueryParams withPodConnectionTimeout(String podConnectionTimeout) {
        this.podConnectionTimeout = podConnectionTimeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetParameters0Enum type;
    public GetLogsQueryParams withType(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetParameters0Enum type) {
        this.type = type;
        return this;
    }
}