package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAssessmentFrameworkControlSet
 *  A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This does not contain the control set ID. 
**/
public class UpdateAssessmentFrameworkControlSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controls")
    public CreateAssessmentFrameworkControl[] controls;
    public UpdateAssessmentFrameworkControlSet withControls(CreateAssessmentFrameworkControl[] controls) {
        this.controls = controls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateAssessmentFrameworkControlSet withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateAssessmentFrameworkControlSet withName(String name) {
        this.name = name;
        return this;
    }
}