package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsAddRequest {
    public ContactsAddQueryParams queryParams;
    public ContactsAddRequest withQueryParams(ContactsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContactsAddHeaders headers;
    public ContactsAddRequest withHeaders(ContactsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContactInput request;
    public ContactsAddRequest withRequest(openapisdk.models.shared.ContactInput request) {
        this.request = request;
        return this;
    }
    public ContactsAddSecurity security;
    public ContactsAddRequest withSecurity(ContactsAddSecurity security) {
        this.security = security;
        return this;
    }
}