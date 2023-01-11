package openapisdk.models.shared;



public class PanVerificationRecordSchema {
    public PanVerificationRecordSchemaCertificateData certificateData;
    public PanVerificationRecordSchema withCertificateData(PanVerificationRecordSchemaCertificateData certificateData) {
        this.certificateData = certificateData;
        return this;
    }
    public PanVerificationRecordSchemaIssuedBy issuedBy;
    public PanVerificationRecordSchema withIssuedBy(PanVerificationRecordSchemaIssuedBy issuedBy) {
        this.issuedBy = issuedBy;
        return this;
    }
    public PanVerificationRecordSchemaIssuedTo issuedTo;
    public PanVerificationRecordSchema withIssuedTo(PanVerificationRecordSchemaIssuedTo issuedTo) {
        this.issuedTo = issuedTo;
        return this;
    }
    public String issueDate;
    public PanVerificationRecordSchema withIssueDate(String issueDate) {
        this.issueDate = issueDate;
        return this;
    }
    public String issuedAt;
    public PanVerificationRecordSchema withIssuedAt(String issuedAt) {
        this.issuedAt = issuedAt;
        return this;
    }
    public String language;
    public PanVerificationRecordSchema withLanguage(String language) {
        this.language = language;
        return this;
    }
    public String name;
    public PanVerificationRecordSchema withName(String name) {
        this.name = name;
        return this;
    }
    public String number;
    public PanVerificationRecordSchema withNumber(String number) {
        this.number = number;
        return this;
    }
    public String status;
    public PanVerificationRecordSchema withStatus(String status) {
        this.status = status;
        return this;
    }
    public String type;
    public PanVerificationRecordSchema withType(String type) {
        this.type = type;
        return this;
    }
    public String validFromDate;
    public PanVerificationRecordSchema withValidFromDate(String validFromDate) {
        this.validFromDate = validFromDate;
        return this;
    }
}