package openapisdk.models.shared;



/**
 * InstanceAttributeEnclaveOptions
 * To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to <code>true</code>; otherwise, set it to <code>false</code>.
**/
public class InstanceAttributeEnclaveOptions {
    public java.util.Map<String, Object> enabled;
    public InstanceAttributeEnclaveOptions withEnabled(java.util.Map<String, Object> enabled) {
        this.enabled = enabled;
        return this;
    }
}