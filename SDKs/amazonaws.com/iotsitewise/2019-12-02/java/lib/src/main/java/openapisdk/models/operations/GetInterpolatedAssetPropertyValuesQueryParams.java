package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInterpolatedAssetPropertyValuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assetId")
    public String assetId;
    public GetInterpolatedAssetPropertyValuesQueryParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTimeInSeconds")
    public Long endTimeInSeconds;
    public GetInterpolatedAssetPropertyValuesQueryParams withEndTimeInSeconds(Long endTimeInSeconds) {
        this.endTimeInSeconds = endTimeInSeconds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTimeOffsetInNanos")
    public Long endTimeOffsetInNanos;
    public GetInterpolatedAssetPropertyValuesQueryParams withEndTimeOffsetInNanos(Long endTimeOffsetInNanos) {
        this.endTimeOffsetInNanos = endTimeOffsetInNanos;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=intervalInSeconds")
    public Long intervalInSeconds;
    public GetInterpolatedAssetPropertyValuesQueryParams withIntervalInSeconds(Long intervalInSeconds) {
        this.intervalInSeconds = intervalInSeconds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=intervalWindowInSeconds")
    public Long intervalWindowInSeconds;
    public GetInterpolatedAssetPropertyValuesQueryParams withIntervalWindowInSeconds(Long intervalWindowInSeconds) {
        this.intervalWindowInSeconds = intervalWindowInSeconds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetInterpolatedAssetPropertyValuesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetInterpolatedAssetPropertyValuesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=propertyAlias")
    public String propertyAlias;
    public GetInterpolatedAssetPropertyValuesQueryParams withPropertyAlias(String propertyAlias) {
        this.propertyAlias = propertyAlias;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=propertyId")
    public String propertyId;
    public GetInterpolatedAssetPropertyValuesQueryParams withPropertyId(String propertyId) {
        this.propertyId = propertyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quality")
    public GetInterpolatedAssetPropertyValuesQualityEnum quality;
    public GetInterpolatedAssetPropertyValuesQueryParams withQuality(GetInterpolatedAssetPropertyValuesQualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTimeInSeconds")
    public Long startTimeInSeconds;
    public GetInterpolatedAssetPropertyValuesQueryParams withStartTimeInSeconds(Long startTimeInSeconds) {
        this.startTimeInSeconds = startTimeInSeconds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTimeOffsetInNanos")
    public Long startTimeOffsetInNanos;
    public GetInterpolatedAssetPropertyValuesQueryParams withStartTimeOffsetInNanos(Long startTimeOffsetInNanos) {
        this.startTimeOffsetInNanos = startTimeOffsetInNanos;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public GetInterpolatedAssetPropertyValuesQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}