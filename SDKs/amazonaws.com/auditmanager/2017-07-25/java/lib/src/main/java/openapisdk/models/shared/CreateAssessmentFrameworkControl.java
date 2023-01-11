package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAssessmentFrameworkControl
 *  Control entity attributes that uniquely identify an existing control to be added to a framework in Audit Manager. 
**/
public class CreateAssessmentFrameworkControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateAssessmentFrameworkControl withId(String id) {
        this.id = id;
        return this;
    }
}