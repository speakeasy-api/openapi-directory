package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFieldLevelEncryption20190326PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public GetFieldLevelEncryption20190326PathParams withId(String id) {
        this.id = id;
        return this;
    }
}