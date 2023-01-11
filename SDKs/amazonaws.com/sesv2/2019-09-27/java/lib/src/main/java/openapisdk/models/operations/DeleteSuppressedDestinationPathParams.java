package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSuppressedDestinationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmailAddress")
    public String emailAddress;
    public DeleteSuppressedDestinationPathParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
}