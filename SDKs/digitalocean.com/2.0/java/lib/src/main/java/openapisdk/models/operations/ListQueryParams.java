package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public ListTypeEnum type;
    public ListQueryParams withType(ListTypeEnum type) {
        this.type = type;
        return this;
    }
}