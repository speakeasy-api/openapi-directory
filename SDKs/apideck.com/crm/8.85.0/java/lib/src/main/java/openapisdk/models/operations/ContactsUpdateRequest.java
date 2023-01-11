package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsUpdateRequest {
    public ContactsUpdatePathParams pathParams;
    public ContactsUpdateRequest withPathParams(ContactsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactsUpdateQueryParams queryParams;
    public ContactsUpdateRequest withQueryParams(ContactsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContactsUpdateHeaders headers;
    public ContactsUpdateRequest withHeaders(ContactsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContactInput request;
    public ContactsUpdateRequest withRequest(openapisdk.models.shared.ContactInput request) {
        this.request = request;
        return this;
    }
    public ContactsUpdateSecurity security;
    public ContactsUpdateRequest withSecurity(ContactsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}