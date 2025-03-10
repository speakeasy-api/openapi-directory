/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AddEvidenceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.AddEvidencePaymentDisputeRequest addEvidencePaymentDisputeRequest;

    public AddEvidenceRequest withAddEvidencePaymentDisputeRequest(org.openapis.openapi.models.shared.AddEvidencePaymentDisputeRequest addEvidencePaymentDisputeRequest) {
        this.addEvidencePaymentDisputeRequest = addEvidencePaymentDisputeRequest;
        return this;
    }
    
    /**
     * This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to add evidence for a contested payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the &lt;strong&gt;paymentDisputeId&lt;/strong&gt; field in the &lt;strong&gt;getPaymentDisputeSummaries&lt;/strong&gt; response.&lt;br&gt;&lt;br&gt;This path parameter is required, and the actual identifier value is passed in right after the &lt;strong&gt;payment_dispute&lt;/strong&gt; resource. See the Resource URI above.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment_dispute_id")
    public String paymentDisputeId;

    public AddEvidenceRequest withPaymentDisputeId(String paymentDisputeId) {
        this.paymentDisputeId = paymentDisputeId;
        return this;
    }
    
    public AddEvidenceRequest(@JsonProperty("payment_dispute_id") String paymentDisputeId) {
        this.paymentDisputeId = paymentDisputeId;
  }
}
