package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFieldLevelEncryptionProfile20200531PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public UpdateFieldLevelEncryptionProfile20200531PathParams withId(String id) {
        this.id = id;
        return this;
    }
}