package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetPropertyValueHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assetId")
    public String assetId;
    public GetAssetPropertyValueHistoryQueryParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public OffsetDateTime endDate;
    public GetAssetPropertyValueHistoryQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetAssetPropertyValueHistoryQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetAssetPropertyValueHistoryQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=propertyAlias")
    public String propertyAlias;
    public GetAssetPropertyValueHistoryQueryParams withPropertyAlias(String propertyAlias) {
        this.propertyAlias = propertyAlias;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=propertyId")
    public String propertyId;
    public GetAssetPropertyValueHistoryQueryParams withPropertyId(String propertyId) {
        this.propertyId = propertyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=qualities")
    public openapisdk.models.shared.QualityEnum[] qualities;
    public GetAssetPropertyValueHistoryQueryParams withQualities(openapisdk.models.shared.QualityEnum[] qualities) {
        this.qualities = qualities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public OffsetDateTime startDate;
    public GetAssetPropertyValueHistoryQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeOrdering")
    public GetAssetPropertyValueHistoryTimeOrderingEnum timeOrdering;
    public GetAssetPropertyValueHistoryQueryParams withTimeOrdering(GetAssetPropertyValueHistoryTimeOrderingEnum timeOrdering) {
        this.timeOrdering = timeOrdering;
        return this;
    }
}