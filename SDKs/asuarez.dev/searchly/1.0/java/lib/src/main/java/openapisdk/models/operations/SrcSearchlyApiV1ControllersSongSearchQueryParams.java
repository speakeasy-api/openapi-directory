package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SrcSearchlyApiV1ControllersSongSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SrcSearchlyApiV1ControllersSongSearchQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}