package openapisdk.models.shared;



/**
 * HsmConfiguration
 * Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
**/
public class HsmConfiguration {
    public String description;
    public HsmConfiguration withDescription(String description) {
        this.description = description;
        return this;
    }
    public String hsmConfigurationIdentifier;
    public HsmConfiguration withHsmConfigurationIdentifier(String hsmConfigurationIdentifier) {
        this.hsmConfigurationIdentifier = hsmConfigurationIdentifier;
        return this;
    }
    public String hsmIpAddress;
    public HsmConfiguration withHsmIpAddress(String hsmIpAddress) {
        this.hsmIpAddress = hsmIpAddress;
        return this;
    }
    public String hsmPartitionName;
    public HsmConfiguration withHsmPartitionName(String hsmPartitionName) {
        this.hsmPartitionName = hsmPartitionName;
        return this;
    }
    public TagList[] tags;
    public HsmConfiguration withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}