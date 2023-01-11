package openapisdk.models.shared;



/**
 * ModifyAddressAttributeResultAddressPtrRecordUpdate
 * The updated PTR record for the IP address.
**/
public class ModifyAddressAttributeResultAddressPtrRecordUpdate {
    public java.util.Map<String, Object> reason;
    public ModifyAddressAttributeResultAddressPtrRecordUpdate withReason(java.util.Map<String, Object> reason) {
        this.reason = reason;
        return this;
    }
    public java.util.Map<String, Object> status;
    public ModifyAddressAttributeResultAddressPtrRecordUpdate withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, Object> value;
    public ModifyAddressAttributeResultAddressPtrRecordUpdate withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}