package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteClassUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public DeleteClassUserPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public DeleteClassUserPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}