package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AvatarsGetFaviconQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public AvatarsGetFaviconQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}