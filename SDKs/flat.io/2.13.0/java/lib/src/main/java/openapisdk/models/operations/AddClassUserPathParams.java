package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddClassUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public AddClassUserPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public AddClassUserPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}