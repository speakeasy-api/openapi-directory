package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConflictingAliases20200531QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Alias")
    public String alias;
    public ListConflictingAliases20200531QueryParams withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DistributionId")
    public String distributionId;
    public ListConflictingAliases20200531QueryParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListConflictingAliases20200531QueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public ListConflictingAliases20200531QueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}