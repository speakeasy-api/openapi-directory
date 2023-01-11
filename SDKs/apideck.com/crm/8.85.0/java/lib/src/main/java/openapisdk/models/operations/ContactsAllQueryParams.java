package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ContactsAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.ContactsFilter filter;
    public ContactsAllQueryParams withFilter(openapisdk.models.shared.ContactsFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ContactsAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ContactsAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=sort")
    public openapisdk.models.shared.ContactsSort sort;
    public ContactsAllQueryParams withSort(openapisdk.models.shared.ContactsSort sort) {
        this.sort = sort;
        return this;
    }
}