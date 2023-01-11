package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribePoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribePoliciesActionEnum action;
    public GetDescribePoliciesQueryParams withAction(GetDescribePoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDescribePoliciesQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribePoliciesQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribePoliciesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyNames")
    public String[] policyNames;
    public GetDescribePoliciesQueryParams withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyTypes")
    public String[] policyTypes;
    public GetDescribePoliciesQueryParams withPolicyTypes(String[] policyTypes) {
        this.policyTypes = policyTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribePoliciesVersionEnum version;
    public GetDescribePoliciesQueryParams withVersion(GetDescribePoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}