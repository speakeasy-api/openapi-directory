package openapisdk.models.shared;



/**
 * ApplicationDescriptionMessage
 * Result message containing a single description of an application.
**/
public class ApplicationDescriptionMessage {
    public ApplicationDescription application;
    public ApplicationDescriptionMessage withApplication(ApplicationDescription application) {
        this.application = application;
        return this;
    }
}