package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetCreateTemplateTemplate
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
public class GetCreateTemplateTemplate {
    @SpeakeasyMetadata("queryParam:name=HtmlPart")
    public String htmlPart;
    public GetCreateTemplateTemplate withHtmlPart(String htmlPart) {
        this.htmlPart = htmlPart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=SubjectPart")
    public String subjectPart;
    public GetCreateTemplateTemplate withSubjectPart(String subjectPart) {
        this.subjectPart = subjectPart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=TemplateName")
    public String templateName;
    public GetCreateTemplateTemplate withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=TextPart")
    public String textPart;
    public GetCreateTemplateTemplate withTextPart(String textPart) {
        this.textPart = textPart;
        return this;
    }
}