package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSecurityProfilesForTargetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListSecurityProfilesForTargetQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListSecurityProfilesForTargetQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recursive")
    public Boolean recursive;
    public ListSecurityProfilesForTargetQueryParams withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=securityProfileTargetArn")
    public String securityProfileTargetArn;
    public ListSecurityProfilesForTargetQueryParams withSecurityProfileTargetArn(String securityProfileTargetArn) {
        this.securityProfileTargetArn = securityProfileTargetArn;
        return this;
    }
}