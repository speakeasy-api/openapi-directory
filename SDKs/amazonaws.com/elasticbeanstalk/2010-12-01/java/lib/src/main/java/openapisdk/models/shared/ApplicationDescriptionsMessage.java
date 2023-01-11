package openapisdk.models.shared;



/**
 * ApplicationDescriptionsMessage
 * Result message containing a list of application descriptions.
**/
public class ApplicationDescriptionsMessage {
    public ApplicationDescription[] applications;
    public ApplicationDescriptionsMessage withApplications(ApplicationDescription[] applications) {
        this.applications = applications;
        return this;
    }
}