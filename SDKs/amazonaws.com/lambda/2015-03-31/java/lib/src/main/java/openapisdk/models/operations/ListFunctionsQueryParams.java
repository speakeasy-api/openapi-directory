package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFunctionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FunctionVersion")
    public ListFunctionsFunctionVersionEnum functionVersion;
    public ListFunctionsQueryParams withFunctionVersion(ListFunctionsFunctionVersionEnum functionVersion) {
        this.functionVersion = functionVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListFunctionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MasterRegion")
    public String masterRegion;
    public ListFunctionsQueryParams withMasterRegion(String masterRegion) {
        this.masterRegion = masterRegion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public ListFunctionsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}