package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListClassStudentSubmissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public ListClassStudentSubmissionsPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user")
    public String user;
    public ListClassStudentSubmissionsPathParams withUser(String user) {
        this.user = user;
        return this;
    }
}