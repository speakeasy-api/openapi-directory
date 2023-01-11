package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListProfileObjectTypeTemplateItem
 * A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates.
**/
public class ListProfileObjectTypeTemplateItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceName")
    public String sourceName;
    public ListProfileObjectTypeTemplateItem withSourceName(String sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceObject")
    public String sourceObject;
    public ListProfileObjectTypeTemplateItem withSourceObject(String sourceObject) {
        this.sourceObject = sourceObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateId")
    public String templateId;
    public ListProfileObjectTypeTemplateItem withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}