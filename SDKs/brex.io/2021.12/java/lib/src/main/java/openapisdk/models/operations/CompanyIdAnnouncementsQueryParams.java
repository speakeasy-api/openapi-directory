package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyIdAnnouncementsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=data")
    public Boolean data;
    public CompanyIdAnnouncementsQueryParams withData(Boolean data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public CompanyIdAnnouncementsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public CompanyIdAnnouncementsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}