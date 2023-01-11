package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contactId")
    public String contactId;
    public CancelContactPathParams withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
}