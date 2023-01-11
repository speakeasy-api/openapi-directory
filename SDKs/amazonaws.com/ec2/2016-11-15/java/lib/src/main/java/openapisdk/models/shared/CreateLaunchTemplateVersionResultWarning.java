package openapisdk.models.shared;



/**
 * CreateLaunchTemplateVersionResultWarning
 * If the new version of the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
**/
public class CreateLaunchTemplateVersionResultWarning {
    public java.util.Map<String, Object> errors;
    public CreateLaunchTemplateVersionResultWarning withErrors(java.util.Map<String, Object> errors) {
        this.errors = errors;
        return this;
    }
}