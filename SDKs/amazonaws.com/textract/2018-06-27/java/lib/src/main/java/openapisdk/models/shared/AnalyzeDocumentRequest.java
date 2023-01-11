package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnalyzeDocumentRequest {
    @JsonProperty("Document")
    public Document document;
    public AnalyzeDocumentRequest withDocument(Document document) {
        this.document = document;
        return this;
    }
    @JsonProperty("FeatureTypes")
    public FeatureTypeEnum[] featureTypes;
    public AnalyzeDocumentRequest withFeatureTypes(FeatureTypeEnum[] featureTypes) {
        this.featureTypes = featureTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HumanLoopConfig")
    public HumanLoopConfig humanLoopConfig;
    public AnalyzeDocumentRequest withHumanLoopConfig(HumanLoopConfig humanLoopConfig) {
        this.humanLoopConfig = humanLoopConfig;
        return this;
    }
}