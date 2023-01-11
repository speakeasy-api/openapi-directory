package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruststoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=:operation")
    public String operation;
    public PostTruststoreQueryParams withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyStoreType")
    public String keyStoreType;
    public PostTruststoreQueryParams withKeyStoreType(String keyStoreType) {
        this.keyStoreType = keyStoreType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newPassword")
    public String newPassword;
    public PostTruststoreQueryParams withNewPassword(String newPassword) {
        this.newPassword = newPassword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rePassword")
    public String rePassword;
    public PostTruststoreQueryParams withRePassword(String rePassword) {
        this.rePassword = rePassword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=removeAlias")
    public String removeAlias;
    public PostTruststoreQueryParams withRemoveAlias(String removeAlias) {
        this.removeAlias = removeAlias;
        return this;
    }
}