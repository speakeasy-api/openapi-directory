package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAssessmentFrameworkControlSet
 *  A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This does not contain the control set ID. 
**/
public class CreateAssessmentFrameworkControlSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controls")
    public CreateAssessmentFrameworkControl[] controls;
    public CreateAssessmentFrameworkControlSet withControls(CreateAssessmentFrameworkControl[] controls) {
        this.controls = controls;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateAssessmentFrameworkControlSet withName(String name) {
        this.name = name;
        return this;
    }
}