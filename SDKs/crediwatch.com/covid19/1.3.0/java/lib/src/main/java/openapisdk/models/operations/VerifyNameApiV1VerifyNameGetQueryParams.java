package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyNameApiV1VerifyNameGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public VerifyNameApiV1VerifyNameGetQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public VerifyNameApiV1VerifyNameGetQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public VerifyNameApiV1VerifyNameGetQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}