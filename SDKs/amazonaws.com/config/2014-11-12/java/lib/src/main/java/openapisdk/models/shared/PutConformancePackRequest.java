package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutConformancePackRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConformancePackInputParameters")
    public ConformancePackInputParameter[] conformancePackInputParameters;
    public PutConformancePackRequest withConformancePackInputParameters(ConformancePackInputParameter[] conformancePackInputParameters) {
        this.conformancePackInputParameters = conformancePackInputParameters;
        return this;
    }
    @JsonProperty("ConformancePackName")
    public String conformancePackName;
    public PutConformancePackRequest withConformancePackName(String conformancePackName) {
        this.conformancePackName = conformancePackName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryS3Bucket")
    public String deliveryS3Bucket;
    public PutConformancePackRequest withDeliveryS3Bucket(String deliveryS3Bucket) {
        this.deliveryS3Bucket = deliveryS3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryS3KeyPrefix")
    public String deliveryS3KeyPrefix;
    public PutConformancePackRequest withDeliveryS3KeyPrefix(String deliveryS3KeyPrefix) {
        this.deliveryS3KeyPrefix = deliveryS3KeyPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateBody")
    public String templateBody;
    public PutConformancePackRequest withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateS3Uri")
    public String templateS3Uri;
    public PutConformancePackRequest withTemplateS3Uri(String templateS3Uri) {
        this.templateS3Uri = templateS3Uri;
        return this;
    }
}