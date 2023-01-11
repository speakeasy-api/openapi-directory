package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public ReadJobPathParams withId(String id) {
        this.id = id;
        return this;
    }
}