package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Recipient-Email")
    public String xRecipientEmail;
    public PostUploadHeaders withXRecipientEmail(String xRecipientEmail) {
        this.xRecipientEmail = xRecipientEmail;
        return this;
    }
}