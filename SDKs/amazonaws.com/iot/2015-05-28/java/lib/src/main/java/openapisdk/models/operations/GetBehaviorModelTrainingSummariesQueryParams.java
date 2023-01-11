package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBehaviorModelTrainingSummariesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetBehaviorModelTrainingSummariesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetBehaviorModelTrainingSummariesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=securityProfileName")
    public String securityProfileName;
    public GetBehaviorModelTrainingSummariesQueryParams withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
}