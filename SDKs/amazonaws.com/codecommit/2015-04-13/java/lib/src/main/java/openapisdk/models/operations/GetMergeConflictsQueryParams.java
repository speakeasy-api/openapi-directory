package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMergeConflictsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxConflictFiles")
    public String maxConflictFiles;
    public GetMergeConflictsQueryParams withMaxConflictFiles(String maxConflictFiles) {
        this.maxConflictFiles = maxConflictFiles;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetMergeConflictsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}