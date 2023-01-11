package openapisdk.models.shared;



public class DrivingLicenseSchema {
    public DrivingLicenseSchemaCertificateData certificateData;
    public DrivingLicenseSchema withCertificateData(DrivingLicenseSchemaCertificateData certificateData) {
        this.certificateData = certificateData;
        return this;
    }
    public DrivingLicenseSchemaIssuedBy issuedBy;
    public DrivingLicenseSchema withIssuedBy(DrivingLicenseSchemaIssuedBy issuedBy) {
        this.issuedBy = issuedBy;
        return this;
    }
    public DrivingLicenseSchemaIssuedTo issuedTo;
    public DrivingLicenseSchema withIssuedTo(DrivingLicenseSchemaIssuedTo issuedTo) {
        this.issuedTo = issuedTo;
        return this;
    }
    public String expiryDate;
    public DrivingLicenseSchema withExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
        return this;
    }
    public String issueDate;
    public DrivingLicenseSchema withIssueDate(String issueDate) {
        this.issueDate = issueDate;
        return this;
    }
    public String issuedAt;
    public DrivingLicenseSchema withIssuedAt(String issuedAt) {
        this.issuedAt = issuedAt;
        return this;
    }
    public String language;
    public DrivingLicenseSchema withLanguage(String language) {
        this.language = language;
        return this;
    }
    public String name;
    public DrivingLicenseSchema withName(String name) {
        this.name = name;
        return this;
    }
    public Long number;
    public DrivingLicenseSchema withNumber(Long number) {
        this.number = number;
        return this;
    }
    public Long prevNumber;
    public DrivingLicenseSchema withPrevNumber(Long prevNumber) {
        this.prevNumber = prevNumber;
        return this;
    }
    public String status;
    public DrivingLicenseSchema withStatus(String status) {
        this.status = status;
        return this;
    }
    public String type;
    public DrivingLicenseSchema withType(String type) {
        this.type = type;
        return this;
    }
    public String validFromDate;
    public DrivingLicenseSchema withValidFromDate(String validFromDate) {
        this.validFromDate = validFromDate;
        return this;
    }
}