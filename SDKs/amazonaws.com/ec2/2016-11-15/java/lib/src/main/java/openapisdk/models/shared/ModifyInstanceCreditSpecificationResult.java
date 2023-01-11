package openapisdk.models.shared;



public class ModifyInstanceCreditSpecificationResult {
    public java.util.Map<String, Object> successfulInstanceCreditSpecifications;
    public ModifyInstanceCreditSpecificationResult withSuccessfulInstanceCreditSpecifications(java.util.Map<String, Object> successfulInstanceCreditSpecifications) {
        this.successfulInstanceCreditSpecifications = successfulInstanceCreditSpecifications;
        return this;
    }
    public java.util.Map<String, Object> unsuccessfulInstanceCreditSpecifications;
    public ModifyInstanceCreditSpecificationResult withUnsuccessfulInstanceCreditSpecifications(java.util.Map<String, Object> unsuccessfulInstanceCreditSpecifications) {
        this.unsuccessfulInstanceCreditSpecifications = unsuccessfulInstanceCreditSpecifications;
        return this;
    }
}