package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMergeConflictsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxMergeHunks")
    public String maxMergeHunks;
    public DescribeMergeConflictsQueryParams withMaxMergeHunks(String maxMergeHunks) {
        this.maxMergeHunks = maxMergeHunks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public DescribeMergeConflictsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}