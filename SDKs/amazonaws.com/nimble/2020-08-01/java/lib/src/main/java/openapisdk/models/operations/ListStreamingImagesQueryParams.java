package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStreamingImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListStreamingImagesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=owner")
    public String owner;
    public ListStreamingImagesQueryParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
}