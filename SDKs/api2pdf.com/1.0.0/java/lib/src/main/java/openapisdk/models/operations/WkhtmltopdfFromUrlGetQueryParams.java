package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WkhtmltopdfFromUrlGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=output")
    public String output;
    public WkhtmltopdfFromUrlGetQueryParams withOutput(String output) {
        this.output = output;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public WkhtmltopdfFromUrlGetQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}