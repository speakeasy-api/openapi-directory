package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AirbyteStream
 * the immutable schema defined by the source
**/
public class AirbyteStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultCursorField")
    public String[] defaultCursorField;
    public AirbyteStream withDefaultCursorField(String[] defaultCursorField) {
        this.defaultCursorField = defaultCursorField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonSchema")
    public java.util.Map<String, Object> jsonSchema;
    public AirbyteStream withJsonSchema(java.util.Map<String, Object> jsonSchema) {
        this.jsonSchema = jsonSchema;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AirbyteStream withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public String namespace;
    public AirbyteStream withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceDefinedCursor")
    public Boolean sourceDefinedCursor;
    public AirbyteStream withSourceDefinedCursor(Boolean sourceDefinedCursor) {
        this.sourceDefinedCursor = sourceDefinedCursor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceDefinedPrimaryKey")
    public String[][] sourceDefinedPrimaryKey;
    public AirbyteStream withSourceDefinedPrimaryKey(String[][] sourceDefinedPrimaryKey) {
        this.sourceDefinedPrimaryKey = sourceDefinedPrimaryKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedSyncModes")
    public SyncModeEnum[] supportedSyncModes;
    public AirbyteStream withSupportedSyncModes(SyncModeEnum[] supportedSyncModes) {
        this.supportedSyncModes = supportedSyncModes;
        return this;
    }
}