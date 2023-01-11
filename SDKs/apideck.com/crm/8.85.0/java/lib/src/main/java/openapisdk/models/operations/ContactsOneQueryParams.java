package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ContactsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}