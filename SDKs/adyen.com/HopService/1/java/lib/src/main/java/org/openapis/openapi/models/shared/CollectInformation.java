/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CollectInformation {
    /**
     * Indicates whether [bank account details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/bank-account-check) must be collected. Default is **true**.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankDetails")
    public Boolean bankDetails;

    public CollectInformation withBankDetails(Boolean bankDetails) {
        this.bankDetails = bankDetails;
        return this;
    }
    
    /**
     * Indicates whether [business details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/company-check) must be collected. Default is **true**.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessDetails")
    public Boolean businessDetails;

    public CollectInformation withBusinessDetails(Boolean businessDetails) {
        this.businessDetails = businessDetails;
        return this;
    }
    
    /**
     * Indicates whether [individual details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/identity-check) must be collected. Default is **true**.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualDetails")
    public Boolean individualDetails;

    public CollectInformation withIndividualDetails(Boolean individualDetails) {
        this.individualDetails = individualDetails;
        return this;
    }
    
    /**
     * Indicates whether [legal arrangement details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/legal-arrangements) must be collected. Default is **true**.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legalArrangementDetails")
    public Boolean legalArrangementDetails;

    public CollectInformation withLegalArrangementDetails(Boolean legalArrangementDetails) {
        this.legalArrangementDetails = legalArrangementDetails;
        return this;
    }
    
    /**
     * Indicates whether answers to a [PCI questionnaire](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners#onboard-partner-platform) must be collected. Applies only to partner platforms. Default is **true**.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pciQuestionnaire")
    public Boolean pciQuestionnaire;

    public CollectInformation withPciQuestionnaire(Boolean pciQuestionnaire) {
        this.pciQuestionnaire = pciQuestionnaire;
        return this;
    }
    
    /**
     * Indicates whether [shareholder details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/identity-check) must be collected. Defaults to **true**.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareholderDetails")
    public Boolean shareholderDetails;

    public CollectInformation withShareholderDetails(Boolean shareholderDetails) {
        this.shareholderDetails = shareholderDetails;
        return this;
    }
    
    public CollectInformation(){}
}
