package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyTargetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyTargetGroupActionEnum action;
    public GetModifyTargetGroupQueryParams withAction(GetModifyTargetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HealthCheckEnabled")
    public Boolean healthCheckEnabled;
    public GetModifyTargetGroupQueryParams withHealthCheckEnabled(Boolean healthCheckEnabled) {
        this.healthCheckEnabled = healthCheckEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HealthCheckIntervalSeconds")
    public Long healthCheckIntervalSeconds;
    public GetModifyTargetGroupQueryParams withHealthCheckIntervalSeconds(Long healthCheckIntervalSeconds) {
        this.healthCheckIntervalSeconds = healthCheckIntervalSeconds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HealthCheckPath")
    public String healthCheckPath;
    public GetModifyTargetGroupQueryParams withHealthCheckPath(String healthCheckPath) {
        this.healthCheckPath = healthCheckPath;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HealthCheckPort")
    public String healthCheckPort;
    public GetModifyTargetGroupQueryParams withHealthCheckPort(String healthCheckPort) {
        this.healthCheckPort = healthCheckPort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HealthCheckProtocol")
    public GetModifyTargetGroupHealthCheckProtocolEnum healthCheckProtocol;
    public GetModifyTargetGroupQueryParams withHealthCheckProtocol(GetModifyTargetGroupHealthCheckProtocolEnum healthCheckProtocol) {
        this.healthCheckProtocol = healthCheckProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HealthCheckTimeoutSeconds")
    public Long healthCheckTimeoutSeconds;
    public GetModifyTargetGroupQueryParams withHealthCheckTimeoutSeconds(Long healthCheckTimeoutSeconds) {
        this.healthCheckTimeoutSeconds = healthCheckTimeoutSeconds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HealthyThresholdCount")
    public Long healthyThresholdCount;
    public GetModifyTargetGroupQueryParams withHealthyThresholdCount(Long healthyThresholdCount) {
        this.healthyThresholdCount = healthyThresholdCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Matcher")
    public GetModifyTargetGroupMatcher matcher;
    public GetModifyTargetGroupQueryParams withMatcher(GetModifyTargetGroupMatcher matcher) {
        this.matcher = matcher;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetGroupArn")
    public String targetGroupArn;
    public GetModifyTargetGroupQueryParams withTargetGroupArn(String targetGroupArn) {
        this.targetGroupArn = targetGroupArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UnhealthyThresholdCount")
    public Long unhealthyThresholdCount;
    public GetModifyTargetGroupQueryParams withUnhealthyThresholdCount(Long unhealthyThresholdCount) {
        this.unhealthyThresholdCount = unhealthyThresholdCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyTargetGroupVersionEnum version;
    public GetModifyTargetGroupQueryParams withVersion(GetModifyTargetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}