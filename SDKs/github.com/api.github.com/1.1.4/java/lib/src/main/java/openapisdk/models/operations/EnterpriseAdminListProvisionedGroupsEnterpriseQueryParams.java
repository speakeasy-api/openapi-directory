package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludedAttributes")
    public String excludedAttributes;
    public EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams withExcludedAttributes(String excludedAttributes) {
        this.excludedAttributes = excludedAttributes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;
    public EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}