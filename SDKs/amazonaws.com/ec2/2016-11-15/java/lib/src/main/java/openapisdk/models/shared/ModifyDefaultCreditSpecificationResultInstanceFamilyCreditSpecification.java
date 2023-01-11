package openapisdk.models.shared;



/**
 * ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification
 * The default credit option for CPU usage of the instance family.
**/
public class ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification {
    public java.util.Map<String, Object> cpuCredits;
    public ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification withCpuCredits(java.util.Map<String, Object> cpuCredits) {
        this.cpuCredits = cpuCredits;
        return this;
    }
    public java.util.Map<String, Object> instanceFamily;
    public ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification withInstanceFamily(java.util.Map<String, Object> instanceFamily) {
        this.instanceFamily = instanceFamily;
        return this;
    }
}