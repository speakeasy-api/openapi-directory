package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmailIdentityConfigurationSetAttributesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmailIdentity")
    public String emailIdentity;
    public PutEmailIdentityConfigurationSetAttributesPathParams withEmailIdentity(String emailIdentity) {
        this.emailIdentity = emailIdentity;
        return this;
    }
}