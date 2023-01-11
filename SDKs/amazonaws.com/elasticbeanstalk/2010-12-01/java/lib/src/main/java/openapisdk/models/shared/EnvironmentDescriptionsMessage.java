package openapisdk.models.shared;



/**
 * EnvironmentDescriptionsMessage
 * Result message containing a list of environment descriptions.
**/
public class EnvironmentDescriptionsMessage {
    public EnvironmentDescription[] environments;
    public EnvironmentDescriptionsMessage withEnvironments(EnvironmentDescription[] environments) {
        this.environments = environments;
        return this;
    }
    public String nextToken;
    public EnvironmentDescriptionsMessage withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}