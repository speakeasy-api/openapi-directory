package openapisdk.models.shared;



/**
 * BackendServerDescription
 * Information about the configuration of an EC2 instance.
**/
public class BackendServerDescription {
    public Long instancePort;
    public BackendServerDescription withInstancePort(Long instancePort) {
        this.instancePort = instancePort;
        return this;
    }
    public String[] policyNames;
    public BackendServerDescription withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
}