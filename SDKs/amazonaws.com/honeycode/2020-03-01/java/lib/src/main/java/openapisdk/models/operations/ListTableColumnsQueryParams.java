package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTableColumnsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListTableColumnsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}