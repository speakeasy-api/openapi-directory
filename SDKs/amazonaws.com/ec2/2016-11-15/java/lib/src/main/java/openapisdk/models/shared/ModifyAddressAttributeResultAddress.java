package openapisdk.models.shared;



/**
 * ModifyAddressAttributeResultAddress
 * Information about the Elastic IP address.
**/
public class ModifyAddressAttributeResultAddress {
    public java.util.Map<String, Object> allocationId;
    public ModifyAddressAttributeResultAddress withAllocationId(java.util.Map<String, Object> allocationId) {
        this.allocationId = allocationId;
        return this;
    }
    public java.util.Map<String, Object> ptrRecord;
    public ModifyAddressAttributeResultAddress withPtrRecord(java.util.Map<String, Object> ptrRecord) {
        this.ptrRecord = ptrRecord;
        return this;
    }
    public ModifyAddressAttributeResultAddressPtrRecordUpdate ptrRecordUpdate;
    public ModifyAddressAttributeResultAddress withPtrRecordUpdate(ModifyAddressAttributeResultAddressPtrRecordUpdate ptrRecordUpdate) {
        this.ptrRecordUpdate = ptrRecordUpdate;
        return this;
    }
    public java.util.Map<String, Object> publicIp;
    public ModifyAddressAttributeResultAddress withPublicIp(java.util.Map<String, Object> publicIp) {
        this.publicIp = publicIp;
        return this;
    }
}