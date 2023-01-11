package openapisdk.models.operations;



public class LabOrdersCreateResponse {
    public String contentType;
    public LabOrdersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabOrder labOrder;
    public LabOrdersCreateResponse withLabOrder(openapisdk.models.shared.LabOrder labOrder) {
        this.labOrder = labOrder;
        return this;
    }
    public Long statusCode;
    public LabOrdersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}