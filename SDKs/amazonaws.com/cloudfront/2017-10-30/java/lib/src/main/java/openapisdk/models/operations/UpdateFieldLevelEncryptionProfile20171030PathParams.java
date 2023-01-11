package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFieldLevelEncryptionProfile20171030PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public UpdateFieldLevelEncryptionProfile20171030PathParams withId(String id) {
        this.id = id;
        return this;
    }
}