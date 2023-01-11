package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LabOrderDocument {
    @JsonProperty("document")
    public String document;
    public LabOrderDocument withDocument(String document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public LabOrderDocument withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("lab_order")
    public Long labOrder;
    public LabOrderDocument withLabOrder(Long labOrder) {
        this.labOrder = labOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public LabOrderDocument withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("type")
    public LabOrderDocumentTypeEnum type;
    public LabOrderDocument withType(LabOrderDocumentTypeEnum type) {
        this.type = type;
        return this;
    }
}