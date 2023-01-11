package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetPropertyAggregatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aggregateTypes")
    public openapisdk.models.shared.AggregateTypeEnum[] aggregateTypes;
    public GetAssetPropertyAggregatesQueryParams withAggregateTypes(openapisdk.models.shared.AggregateTypeEnum[] aggregateTypes) {
        this.aggregateTypes = aggregateTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assetId")
    public String assetId;
    public GetAssetPropertyAggregatesQueryParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public OffsetDateTime endDate;
    public GetAssetPropertyAggregatesQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetAssetPropertyAggregatesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetAssetPropertyAggregatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=propertyAlias")
    public String propertyAlias;
    public GetAssetPropertyAggregatesQueryParams withPropertyAlias(String propertyAlias) {
        this.propertyAlias = propertyAlias;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=propertyId")
    public String propertyId;
    public GetAssetPropertyAggregatesQueryParams withPropertyId(String propertyId) {
        this.propertyId = propertyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=qualities")
    public openapisdk.models.shared.QualityEnum[] qualities;
    public GetAssetPropertyAggregatesQueryParams withQualities(openapisdk.models.shared.QualityEnum[] qualities) {
        this.qualities = qualities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resolution")
    public String resolution;
    public GetAssetPropertyAggregatesQueryParams withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public OffsetDateTime startDate;
    public GetAssetPropertyAggregatesQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeOrdering")
    public GetAssetPropertyAggregatesTimeOrderingEnum timeOrdering;
    public GetAssetPropertyAggregatesQueryParams withTimeOrdering(GetAssetPropertyAggregatesTimeOrderingEnum timeOrdering) {
        this.timeOrdering = timeOrdering;
        return this;
    }
}