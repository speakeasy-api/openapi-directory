package openapisdk.models.shared;



/**
 * ApplicationVersionDescriptionsMessage
 * Result message wrapping a list of application version descriptions.
**/
public class ApplicationVersionDescriptionsMessage {
    public ApplicationVersionDescription[] applicationVersions;
    public ApplicationVersionDescriptionsMessage withApplicationVersions(ApplicationVersionDescription[] applicationVersions) {
        this.applicationVersions = applicationVersions;
        return this;
    }
    public String nextToken;
    public ApplicationVersionDescriptionsMessage withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}