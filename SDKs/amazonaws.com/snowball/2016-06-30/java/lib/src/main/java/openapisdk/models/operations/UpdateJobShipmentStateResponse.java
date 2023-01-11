package openapisdk.models.operations;



public class UpdateJobShipmentStateResponse {
    public String contentType;
    public UpdateJobShipmentStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidJobStateException;
    public UpdateJobShipmentStateResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object invalidResourceException;
    public UpdateJobShipmentStateResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Long statusCode;
    public UpdateJobShipmentStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateJobShipmentStateResult;
    public UpdateJobShipmentStateResponse withUpdateJobShipmentStateResult(java.util.Map<String, Object> updateJobShipmentStateResult) {
        this.updateJobShipmentStateResult = updateJobShipmentStateResult;
        return this;
    }
}