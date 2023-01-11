package openapisdk.models.shared;



/**
 * CreateLaunchTemplateResultWarning
 * If the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
**/
public class CreateLaunchTemplateResultWarning {
    public java.util.Map<String, Object> errors;
    public CreateLaunchTemplateResultWarning withErrors(java.util.Map<String, Object> errors) {
        this.errors = errors;
        return this;
    }
}