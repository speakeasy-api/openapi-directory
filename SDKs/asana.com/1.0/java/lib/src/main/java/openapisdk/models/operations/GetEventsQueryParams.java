package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public GetEventsQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public GetEventsQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource")
    public String resource;
    public GetEventsQueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sync")
    public String sync;
    public GetEventsQueryParams withSync(String sync) {
        this.sync = sync;
        return this;
    }
}