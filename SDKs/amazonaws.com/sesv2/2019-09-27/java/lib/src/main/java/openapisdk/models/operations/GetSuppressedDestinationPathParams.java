package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuppressedDestinationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmailAddress")
    public String emailAddress;
    public GetSuppressedDestinationPathParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
}