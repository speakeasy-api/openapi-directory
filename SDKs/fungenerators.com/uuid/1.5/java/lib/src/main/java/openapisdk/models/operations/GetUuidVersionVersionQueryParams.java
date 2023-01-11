package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUuidVersionVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public GetUuidVersionVersionQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public GetUuidVersionVersionQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public GetUuidVersionVersionQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}