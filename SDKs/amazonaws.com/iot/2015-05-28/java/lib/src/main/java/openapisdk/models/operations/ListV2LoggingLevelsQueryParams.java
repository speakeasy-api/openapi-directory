package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListV2LoggingLevelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListV2LoggingLevelsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListV2LoggingLevelsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=targetType")
    public ListV2LoggingLevelsTargetTypeEnum targetType;
    public ListV2LoggingLevelsQueryParams withTargetType(ListV2LoggingLevelsTargetTypeEnum targetType) {
        this.targetType = targetType;
        return this;
    }
}