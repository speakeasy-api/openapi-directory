package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetPasswordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=old")
    public String old;
    public PostSetPasswordQueryParams withOld(String old) {
        this.old = old;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=plain")
    public String plain;
    public PostSetPasswordQueryParams withPlain(String plain) {
        this.plain = plain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=verify")
    public String verify;
    public PostSetPasswordQueryParams withVerify(String verify) {
        this.verify = verify;
        return this;
    }
}