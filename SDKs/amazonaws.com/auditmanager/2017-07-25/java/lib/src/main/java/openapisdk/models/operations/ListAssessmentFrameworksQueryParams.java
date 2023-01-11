package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssessmentFrameworksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=frameworkType")
    public ListAssessmentFrameworksFrameworkTypeEnum frameworkType;
    public ListAssessmentFrameworksQueryParams withFrameworkType(ListAssessmentFrameworksFrameworkTypeEnum frameworkType) {
        this.frameworkType = frameworkType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListAssessmentFrameworksQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAssessmentFrameworksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}