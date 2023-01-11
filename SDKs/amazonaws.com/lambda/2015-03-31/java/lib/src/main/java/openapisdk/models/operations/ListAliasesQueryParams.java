package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAliasesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FunctionVersion")
    public String functionVersion;
    public ListAliasesQueryParams withFunctionVersion(String functionVersion) {
        this.functionVersion = functionVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListAliasesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public ListAliasesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}