package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTemplateVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next-token")
    public String nextToken;
    public ListTemplateVersionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page-size")
    public String pageSize;
    public ListTemplateVersionsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}