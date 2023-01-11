package openapisdk.models.shared;



/**
 * ResetAddressAttributeResultAddress
 * Information about the IP address.
**/
public class ResetAddressAttributeResultAddress {
    public java.util.Map<String, Object> allocationId;
    public ResetAddressAttributeResultAddress withAllocationId(java.util.Map<String, Object> allocationId) {
        this.allocationId = allocationId;
        return this;
    }
    public java.util.Map<String, Object> ptrRecord;
    public ResetAddressAttributeResultAddress withPtrRecord(java.util.Map<String, Object> ptrRecord) {
        this.ptrRecord = ptrRecord;
        return this;
    }
    public ResetAddressAttributeResultAddressPtrRecordUpdate ptrRecordUpdate;
    public ResetAddressAttributeResultAddress withPtrRecordUpdate(ResetAddressAttributeResultAddressPtrRecordUpdate ptrRecordUpdate) {
        this.ptrRecordUpdate = ptrRecordUpdate;
        return this;
    }
    public java.util.Map<String, Object> publicIp;
    public ResetAddressAttributeResultAddress withPublicIp(java.util.Map<String, Object> publicIp) {
        this.publicIp = publicIp;
        return this;
    }
}