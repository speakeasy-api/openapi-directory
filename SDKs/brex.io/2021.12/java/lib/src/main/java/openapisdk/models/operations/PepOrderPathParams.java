package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PepOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=search")
    public String search;
    public PepOrderPathParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public PepOrderTypeEnum type;
    public PepOrderPathParams withType(PepOrderTypeEnum type) {
        this.type = type;
        return this;
    }
}