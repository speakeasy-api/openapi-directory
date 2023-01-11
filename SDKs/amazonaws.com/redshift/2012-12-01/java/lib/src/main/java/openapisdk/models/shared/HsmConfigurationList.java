package openapisdk.models.shared;



/**
 * HsmConfigurationList
 * Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
**/
public class HsmConfigurationList {
    public String description;
    public HsmConfigurationList withDescription(String description) {
        this.description = description;
        return this;
    }
    public String hsmConfigurationIdentifier;
    public HsmConfigurationList withHsmConfigurationIdentifier(String hsmConfigurationIdentifier) {
        this.hsmConfigurationIdentifier = hsmConfigurationIdentifier;
        return this;
    }
    public String hsmIpAddress;
    public HsmConfigurationList withHsmIpAddress(String hsmIpAddress) {
        this.hsmIpAddress = hsmIpAddress;
        return this;
    }
    public String hsmPartitionName;
    public HsmConfigurationList withHsmPartitionName(String hsmPartitionName) {
        this.hsmPartitionName = hsmPartitionName;
        return this;
    }
    public TagList[] tags;
    public HsmConfigurationList withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}