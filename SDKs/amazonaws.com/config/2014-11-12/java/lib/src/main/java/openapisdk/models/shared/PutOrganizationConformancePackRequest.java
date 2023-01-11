package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrganizationConformancePackRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConformancePackInputParameters")
    public ConformancePackInputParameter[] conformancePackInputParameters;
    public PutOrganizationConformancePackRequest withConformancePackInputParameters(ConformancePackInputParameter[] conformancePackInputParameters) {
        this.conformancePackInputParameters = conformancePackInputParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryS3Bucket")
    public String deliveryS3Bucket;
    public PutOrganizationConformancePackRequest withDeliveryS3Bucket(String deliveryS3Bucket) {
        this.deliveryS3Bucket = deliveryS3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryS3KeyPrefix")
    public String deliveryS3KeyPrefix;
    public PutOrganizationConformancePackRequest withDeliveryS3KeyPrefix(String deliveryS3KeyPrefix) {
        this.deliveryS3KeyPrefix = deliveryS3KeyPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExcludedAccounts")
    public String[] excludedAccounts;
    public PutOrganizationConformancePackRequest withExcludedAccounts(String[] excludedAccounts) {
        this.excludedAccounts = excludedAccounts;
        return this;
    }
    @JsonProperty("OrganizationConformancePackName")
    public String organizationConformancePackName;
    public PutOrganizationConformancePackRequest withOrganizationConformancePackName(String organizationConformancePackName) {
        this.organizationConformancePackName = organizationConformancePackName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateBody")
    public String templateBody;
    public PutOrganizationConformancePackRequest withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateS3Uri")
    public String templateS3Uri;
    public PutOrganizationConformancePackRequest withTemplateS3Uri(String templateS3Uri) {
        this.templateS3Uri = templateS3Uri;
        return this;
    }
}