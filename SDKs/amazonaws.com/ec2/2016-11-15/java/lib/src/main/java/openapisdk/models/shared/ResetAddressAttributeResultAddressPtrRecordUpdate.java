package openapisdk.models.shared;



/**
 * ResetAddressAttributeResultAddressPtrRecordUpdate
 * The updated PTR record for the IP address.
**/
public class ResetAddressAttributeResultAddressPtrRecordUpdate {
    public java.util.Map<String, Object> reason;
    public ResetAddressAttributeResultAddressPtrRecordUpdate withReason(java.util.Map<String, Object> reason) {
        this.reason = reason;
        return this;
    }
    public java.util.Map<String, Object> status;
    public ResetAddressAttributeResultAddressPtrRecordUpdate withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, Object> value;
    public ResetAddressAttributeResultAddressPtrRecordUpdate withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}