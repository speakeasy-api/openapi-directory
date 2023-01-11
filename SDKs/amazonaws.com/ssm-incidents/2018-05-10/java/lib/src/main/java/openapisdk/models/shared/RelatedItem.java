package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelatedItem
 * Resources that responders use to triage and mitigate the incident.
**/
public class RelatedItem {
    @JsonProperty("identifier")
    public ItemIdentifier identifier;
    public RelatedItem withIdentifier(ItemIdentifier identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public RelatedItem withTitle(String title) {
        this.title = title;
        return this;
    }
}