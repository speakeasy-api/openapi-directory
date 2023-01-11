package openapisdk.models.operations;



public class LabOrdersReadResponse {
    public String contentType;
    public LabOrdersReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabOrder labOrder;
    public LabOrdersReadResponse withLabOrder(openapisdk.models.shared.LabOrder labOrder) {
        this.labOrder = labOrder;
        return this;
    }
    public Long statusCode;
    public LabOrdersReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}