package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartDocumentAnalysisRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public StartDocumentAnalysisRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("DocumentLocation")
    public DocumentLocation documentLocation;
    public StartDocumentAnalysisRequest withDocumentLocation(DocumentLocation documentLocation) {
        this.documentLocation = documentLocation;
        return this;
    }
    @JsonProperty("FeatureTypes")
    public FeatureTypeEnum[] featureTypes;
    public StartDocumentAnalysisRequest withFeatureTypes(FeatureTypeEnum[] featureTypes) {
        this.featureTypes = featureTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobTag")
    public String jobTag;
    public StartDocumentAnalysisRequest withJobTag(String jobTag) {
        this.jobTag = jobTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSKeyId")
    public String kmsKeyId;
    public StartDocumentAnalysisRequest withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationChannel")
    public NotificationChannel notificationChannel;
    public StartDocumentAnalysisRequest withNotificationChannel(NotificationChannel notificationChannel) {
        this.notificationChannel = notificationChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputConfig")
    public OutputConfig outputConfig;
    public StartDocumentAnalysisRequest withOutputConfig(OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
}