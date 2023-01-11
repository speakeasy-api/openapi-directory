package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLifecyclePoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=policyIds")
    public String[] policyIds;
    public GetLifecyclePoliciesQueryParams withPolicyIds(String[] policyIds) {
        this.policyIds = policyIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceTypes")
    public openapisdk.models.shared.ResourceTypeValuesEnum[] resourceTypes;
    public GetLifecyclePoliciesQueryParams withResourceTypes(openapisdk.models.shared.ResourceTypeValuesEnum[] resourceTypes) {
        this.resourceTypes = resourceTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public GetLifecyclePoliciesStateEnum state;
    public GetLifecyclePoliciesQueryParams withState(GetLifecyclePoliciesStateEnum state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagsToAdd")
    public String[] tagsToAdd;
    public GetLifecyclePoliciesQueryParams withTagsToAdd(String[] tagsToAdd) {
        this.tagsToAdd = tagsToAdd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=targetTags")
    public String[] targetTags;
    public GetLifecyclePoliciesQueryParams withTargetTags(String[] targetTags) {
        this.targetTags = targetTags;
        return this;
    }
}