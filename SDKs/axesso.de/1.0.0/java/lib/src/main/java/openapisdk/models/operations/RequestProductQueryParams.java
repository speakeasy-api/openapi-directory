package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RequestProductQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public String size;
    public RequestProductQueryParams withSize(String size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public RequestProductQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}