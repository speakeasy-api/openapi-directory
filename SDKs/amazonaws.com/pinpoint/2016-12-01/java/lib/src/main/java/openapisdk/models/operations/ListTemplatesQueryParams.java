package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next-token")
    public String nextToken;
    public ListTemplatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page-size")
    public String pageSize;
    public ListTemplatesQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prefix")
    public String prefix;
    public ListTemplatesQueryParams withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=template-type")
    public String templateType;
    public ListTemplatesQueryParams withTemplateType(String templateType) {
        this.templateType = templateType;
        return this;
    }
}