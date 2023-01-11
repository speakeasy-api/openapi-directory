package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contactId")
    public String contactId;
    public DescribeContactPathParams withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
}