package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthenticatedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onlyId")
    public Boolean onlyId;
    public GetAuthenticatedUserQueryParams withOnlyId(Boolean onlyId) {
        this.onlyId = onlyId;
        return this;
    }
}