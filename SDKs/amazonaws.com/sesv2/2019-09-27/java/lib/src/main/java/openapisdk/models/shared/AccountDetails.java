package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountDetails
 * An object that contains information about your account details.
**/
public class AccountDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalContactEmailAddresses")
    public String[] additionalContactEmailAddresses;
    public AccountDetails withAdditionalContactEmailAddresses(String[] additionalContactEmailAddresses) {
        this.additionalContactEmailAddresses = additionalContactEmailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactLanguage")
    public ContactLanguageEnum contactLanguage;
    public AccountDetails withContactLanguage(ContactLanguageEnum contactLanguage) {
        this.contactLanguage = contactLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MailType")
    public MailTypeEnum mailType;
    public AccountDetails withMailType(MailTypeEnum mailType) {
        this.mailType = mailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReviewDetails")
    public ReviewDetails reviewDetails;
    public AccountDetails withReviewDetails(ReviewDetails reviewDetails) {
        this.reviewDetails = reviewDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseCaseDescription")
    public String useCaseDescription;
    public AccountDetails withUseCaseDescription(String useCaseDescription) {
        this.useCaseDescription = useCaseDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebsiteURL")
    public String websiteURL;
    public AccountDetails withWebsiteUrl(String websiteURL) {
        this.websiteURL = websiteURL;
        return this;
    }
}