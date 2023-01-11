package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFieldLevelEncryptionProfile20181105PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public DeleteFieldLevelEncryptionProfile20181105PathParams withId(String id) {
        this.id = id;
        return this;
    }
}