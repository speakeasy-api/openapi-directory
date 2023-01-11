package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDomainConfigurationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListDomainConfigurationsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public ListDomainConfigurationsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceType")
    public ListDomainConfigurationsServiceTypeEnum serviceType;
    public ListDomainConfigurationsQueryParams withServiceType(ListDomainConfigurationsServiceTypeEnum serviceType) {
        this.serviceType = serviceType;
        return this;
    }
}