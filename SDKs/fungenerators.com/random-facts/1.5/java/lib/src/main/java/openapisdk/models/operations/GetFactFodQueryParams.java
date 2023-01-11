package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFactFodQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public GetFactFodQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
}