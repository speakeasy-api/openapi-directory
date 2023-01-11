package openapisdk.models.operations;



public class LabOrdersSummaryReadResponse {
    public String contentType;
    public LabOrdersSummaryReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabOrder labOrder;
    public LabOrdersSummaryReadResponse withLabOrder(openapisdk.models.shared.LabOrder labOrder) {
        this.labOrder = labOrder;
        return this;
    }
    public Long statusCode;
    public LabOrdersSummaryReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}