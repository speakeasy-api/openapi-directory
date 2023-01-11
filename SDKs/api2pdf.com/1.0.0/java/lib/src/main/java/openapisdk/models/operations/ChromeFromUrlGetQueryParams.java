package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromeFromUrlGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=output")
    public String output;
    public ChromeFromUrlGetQueryParams withOutput(String output) {
        this.output = output;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public ChromeFromUrlGetQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}