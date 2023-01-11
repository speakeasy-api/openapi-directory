package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChargerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=field[]")
    public openapisdk.models.shared.OnechargersGetParameters0Enum[] field;
    public GetChargerQueryParams withField(openapisdk.models.shared.OnechargersGetParameters0Enum[] field) {
        this.field = field;
        return this;
    }
}