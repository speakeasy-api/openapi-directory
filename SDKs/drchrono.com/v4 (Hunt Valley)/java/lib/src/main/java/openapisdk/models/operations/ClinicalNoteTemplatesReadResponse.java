package openapisdk.models.operations;



public class ClinicalNoteTemplatesReadResponse {
    public String contentType;
    public ClinicalNoteTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SoapNoteCustomReport soapNoteCustomReport;
    public ClinicalNoteTemplatesReadResponse withSoapNoteCustomReport(openapisdk.models.shared.SoapNoteCustomReport soapNoteCustomReport) {
        this.soapNoteCustomReport = soapNoteCustomReport;
        return this;
    }
    public Long statusCode;
    public ClinicalNoteTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}