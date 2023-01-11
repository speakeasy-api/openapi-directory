package openapisdk.models.shared;



/**
 * GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification
 * The default credit option for CPU usage of the instance family.
**/
public class GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification {
    public java.util.Map<String, Object> cpuCredits;
    public GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification withCpuCredits(java.util.Map<String, Object> cpuCredits) {
        this.cpuCredits = cpuCredits;
        return this;
    }
    public java.util.Map<String, Object> instanceFamily;
    public GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification withInstanceFamily(java.util.Map<String, Object> instanceFamily) {
        this.instanceFamily = instanceFamily;
        return this;
    }
}