package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChargersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=field[]")
    public GetChargersFieldEnum[] field;
    public GetChargersQueryParams withField(GetChargersFieldEnum[] field) {
        this.field = field;
        return this;
    }
}