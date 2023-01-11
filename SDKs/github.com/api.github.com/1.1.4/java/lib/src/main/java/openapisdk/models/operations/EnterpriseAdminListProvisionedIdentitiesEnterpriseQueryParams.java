package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;
    public EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}