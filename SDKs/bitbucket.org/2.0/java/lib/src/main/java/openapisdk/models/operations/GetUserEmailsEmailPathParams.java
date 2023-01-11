package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserEmailsEmailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=email")
    public String email;
    public GetUserEmailsEmailPathParams withEmail(String email) {
        this.email = email;
        return this;
    }
}