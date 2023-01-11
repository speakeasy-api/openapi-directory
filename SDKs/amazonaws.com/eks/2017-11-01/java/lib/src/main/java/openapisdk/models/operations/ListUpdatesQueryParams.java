package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUpdatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=addonName")
    public String addonName;
    public ListUpdatesQueryParams withAddonName(String addonName) {
        this.addonName = addonName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListUpdatesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListUpdatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nodegroupName")
    public String nodegroupName;
    public ListUpdatesQueryParams withNodegroupName(String nodegroupName) {
        this.nodegroupName = nodegroupName;
        return this;
    }
}