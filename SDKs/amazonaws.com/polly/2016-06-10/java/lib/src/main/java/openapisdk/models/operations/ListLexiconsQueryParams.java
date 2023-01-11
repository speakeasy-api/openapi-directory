package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLexiconsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListLexiconsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}