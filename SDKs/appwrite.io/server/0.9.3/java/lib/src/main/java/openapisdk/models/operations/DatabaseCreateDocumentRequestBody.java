package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DatabaseCreateDocumentRequestBody {
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public DatabaseCreateDocumentRequestBody withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentDocument")
    public String parentDocument;
    public DatabaseCreateDocumentRequestBody withParentDocument(String parentDocument) {
        this.parentDocument = parentDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentProperty")
    public String parentProperty;
    public DatabaseCreateDocumentRequestBody withParentProperty(String parentProperty) {
        this.parentProperty = parentProperty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentPropertyType")
    public String parentPropertyType;
    public DatabaseCreateDocumentRequestBody withParentPropertyType(String parentPropertyType) {
        this.parentPropertyType = parentPropertyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public String[] read;
    public DatabaseCreateDocumentRequestBody withRead(String[] read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("write")
    public String[] write;
    public DatabaseCreateDocumentRequestBody withWrite(String[] write) {
        this.write = write;
        return this;
    }
}