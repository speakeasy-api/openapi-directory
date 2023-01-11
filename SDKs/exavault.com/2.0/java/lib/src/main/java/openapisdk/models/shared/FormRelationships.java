package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormRelationships
 * Share relationship data of the form. 
**/
public class FormRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share")
    public FormRelationshipsShare share;
    public FormRelationships withShare(FormRelationshipsShare share) {
        this.share = share;
        return this;
    }
}