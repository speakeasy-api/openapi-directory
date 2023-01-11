package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchFieldsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Limit")
    public Integer xLimit;
    public FetchFieldsHeaders withXLimit(Integer xLimit) {
        this.xLimit = xLimit;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Next-Token")
    public String xNextToken;
    public FetchFieldsHeaders withXNextToken(String xNextToken) {
        this.xNextToken = xNextToken;
        return this;
    }
}