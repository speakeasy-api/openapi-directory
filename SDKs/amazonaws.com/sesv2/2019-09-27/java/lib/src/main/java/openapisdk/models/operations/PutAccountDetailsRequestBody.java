package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAccountDetailsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalContactEmailAddresses")
    public String[] additionalContactEmailAddresses;
    public PutAccountDetailsRequestBody withAdditionalContactEmailAddresses(String[] additionalContactEmailAddresses) {
        this.additionalContactEmailAddresses = additionalContactEmailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactLanguage")
    public PutAccountDetailsRequestBodyContactLanguageEnum contactLanguage;
    public PutAccountDetailsRequestBody withContactLanguage(PutAccountDetailsRequestBodyContactLanguageEnum contactLanguage) {
        this.contactLanguage = contactLanguage;
        return this;
    }
    @JsonProperty("MailType")
    public PutAccountDetailsRequestBodyMailTypeEnum mailType;
    public PutAccountDetailsRequestBody withMailType(PutAccountDetailsRequestBodyMailTypeEnum mailType) {
        this.mailType = mailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductionAccessEnabled")
    public Boolean productionAccessEnabled;
    public PutAccountDetailsRequestBody withProductionAccessEnabled(Boolean productionAccessEnabled) {
        this.productionAccessEnabled = productionAccessEnabled;
        return this;
    }
    @JsonProperty("UseCaseDescription")
    public String useCaseDescription;
    public PutAccountDetailsRequestBody withUseCaseDescription(String useCaseDescription) {
        this.useCaseDescription = useCaseDescription;
        return this;
    }
    @JsonProperty("WebsiteURL")
    public String websiteURL;
    public PutAccountDetailsRequestBody withWebsiteUrl(String websiteURL) {
        this.websiteURL = websiteURL;
        return this;
    }
}