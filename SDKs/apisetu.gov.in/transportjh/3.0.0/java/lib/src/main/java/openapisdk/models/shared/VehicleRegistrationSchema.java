package openapisdk.models.shared;



public class VehicleRegistrationSchema {
    public VehicleRegistrationSchemaCertificateData certificateData;
    public VehicleRegistrationSchema withCertificateData(VehicleRegistrationSchemaCertificateData certificateData) {
        this.certificateData = certificateData;
        return this;
    }
    public VehicleRegistrationSchemaIssuedBy issuedBy;
    public VehicleRegistrationSchema withIssuedBy(VehicleRegistrationSchemaIssuedBy issuedBy) {
        this.issuedBy = issuedBy;
        return this;
    }
    public VehicleRegistrationSchemaIssuedTo issuedTo;
    public VehicleRegistrationSchema withIssuedTo(VehicleRegistrationSchemaIssuedTo issuedTo) {
        this.issuedTo = issuedTo;
        return this;
    }
    public String expiryDate;
    public VehicleRegistrationSchema withExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
        return this;
    }
    public String issueDate;
    public VehicleRegistrationSchema withIssueDate(String issueDate) {
        this.issueDate = issueDate;
        return this;
    }
    public String issuedAt;
    public VehicleRegistrationSchema withIssuedAt(String issuedAt) {
        this.issuedAt = issuedAt;
        return this;
    }
    public String language;
    public VehicleRegistrationSchema withLanguage(String language) {
        this.language = language;
        return this;
    }
    public String name;
    public VehicleRegistrationSchema withName(String name) {
        this.name = name;
        return this;
    }
    public Long number;
    public VehicleRegistrationSchema withNumber(Long number) {
        this.number = number;
        return this;
    }
    public String status;
    public VehicleRegistrationSchema withStatus(String status) {
        this.status = status;
        return this;
    }
    public String type;
    public VehicleRegistrationSchema withType(String type) {
        this.type = type;
        return this;
    }
    public String validFromDate;
    public VehicleRegistrationSchema withValidFromDate(String validFromDate) {
        this.validFromDate = validFromDate;
        return this;
    }
}