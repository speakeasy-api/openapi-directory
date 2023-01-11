package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCharityOrgsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetCharityOrgsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetCharityOrgsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetCharityOrgsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=registration_ids")
    public String registrationIds;
    public GetCharityOrgsQueryParams withRegistrationIds(String registrationIds) {
        this.registrationIds = registrationIds;
        return this;
    }
}