package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProvisionedConcurrencyConfigsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=List")
    public ListProvisionedConcurrencyConfigsListEnum list;
    public ListProvisionedConcurrencyConfigsQueryParams withList(ListProvisionedConcurrencyConfigsListEnum list) {
        this.list = list;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListProvisionedConcurrencyConfigsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public ListProvisionedConcurrencyConfigsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}