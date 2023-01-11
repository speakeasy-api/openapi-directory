package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeeEmailTemplateInformationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email_template_id")
    public String emailTemplateId;
    public SeeEmailTemplateInformationQueryParams withEmailTemplateId(String emailTemplateId) {
        this.emailTemplateId = emailTemplateId;
        return this;
    }
}