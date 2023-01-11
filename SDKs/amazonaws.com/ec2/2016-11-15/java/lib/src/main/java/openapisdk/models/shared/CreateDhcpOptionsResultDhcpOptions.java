package openapisdk.models.shared;



/**
 * CreateDhcpOptionsResultDhcpOptions
 * A set of DHCP options.
**/
public class CreateDhcpOptionsResultDhcpOptions {
    public java.util.Map<String, Object> dhcpConfigurations;
    public CreateDhcpOptionsResultDhcpOptions withDhcpConfigurations(java.util.Map<String, Object> dhcpConfigurations) {
        this.dhcpConfigurations = dhcpConfigurations;
        return this;
    }
    public java.util.Map<String, Object> dhcpOptionsId;
    public CreateDhcpOptionsResultDhcpOptions withDhcpOptionsId(java.util.Map<String, Object> dhcpOptionsId) {
        this.dhcpOptionsId = dhcpOptionsId;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateDhcpOptionsResultDhcpOptions withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateDhcpOptionsResultDhcpOptions withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}