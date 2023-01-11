package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentReaderConfig
 * The input properties for a topic detection job.
**/
public class DocumentReaderConfig {
    @JsonProperty("DocumentReadAction")
    public DocumentReadActionEnum documentReadAction;
    public DocumentReaderConfig withDocumentReadAction(DocumentReadActionEnum documentReadAction) {
        this.documentReadAction = documentReadAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentReadMode")
    public DocumentReadModeEnum documentReadMode;
    public DocumentReaderConfig withDocumentReadMode(DocumentReadModeEnum documentReadMode) {
        this.documentReadMode = documentReadMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeatureTypes")
    public DocumentReadFeatureTypesEnum[] featureTypes;
    public DocumentReaderConfig withFeatureTypes(DocumentReadFeatureTypesEnum[] featureTypes) {
        this.featureTypes = featureTypes;
        return this;
    }
}