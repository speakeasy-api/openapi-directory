package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1NonprofitsShowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetApiV1NonprofitsShowQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}