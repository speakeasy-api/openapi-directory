package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSimilarQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=link")
    public String link;
    public GetSimilarQueryParams withLink(String link) {
        this.link = link;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetSimilarQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
}