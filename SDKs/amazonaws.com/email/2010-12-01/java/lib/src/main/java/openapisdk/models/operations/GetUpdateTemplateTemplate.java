package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetUpdateTemplateTemplate
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
public class GetUpdateTemplateTemplate {
    @SpeakeasyMetadata("queryParam:name=HtmlPart")
    public String htmlPart;
    public GetUpdateTemplateTemplate withHtmlPart(String htmlPart) {
        this.htmlPart = htmlPart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=SubjectPart")
    public String subjectPart;
    public GetUpdateTemplateTemplate withSubjectPart(String subjectPart) {
        this.subjectPart = subjectPart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=TemplateName")
    public String templateName;
    public GetUpdateTemplateTemplate withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=TextPart")
    public String textPart;
    public GetUpdateTemplateTemplate withTextPart(String textPart) {
        this.textPart = textPart;
        return this;
    }
}