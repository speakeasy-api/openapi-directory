package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExecutePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetExecutePolicyActionEnum action;
    public GetExecutePolicyQueryParams withAction(GetExecutePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetExecutePolicyQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BreachThreshold")
    public Double breachThreshold;
    public GetExecutePolicyQueryParams withBreachThreshold(Double breachThreshold) {
        this.breachThreshold = breachThreshold;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HonorCooldown")
    public Boolean honorCooldown;
    public GetExecutePolicyQueryParams withHonorCooldown(Boolean honorCooldown) {
        this.honorCooldown = honorCooldown;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MetricValue")
    public Double metricValue;
    public GetExecutePolicyQueryParams withMetricValue(Double metricValue) {
        this.metricValue = metricValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetExecutePolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetExecutePolicyVersionEnum version;
    public GetExecutePolicyQueryParams withVersion(GetExecutePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}