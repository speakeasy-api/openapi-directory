package openapisdk.models.shared;



/**
 * ApplicationVersionDescriptionMessage
 * Result message wrapping a single description of an application version.
**/
public class ApplicationVersionDescriptionMessage {
    public ApplicationVersionDescription applicationVersion;
    public ApplicationVersionDescriptionMessage withApplicationVersion(ApplicationVersionDescription applicationVersion) {
        this.applicationVersion = applicationVersion;
        return this;
    }
}