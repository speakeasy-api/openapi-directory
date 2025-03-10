/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateProvisionedProductPropertiesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;

    public UpdateProvisionedProductPropertiesInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;

    public UpdateProvisionedProductPropertiesInput withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    
    @JsonProperty("ProvisionedProductId")
    public String provisionedProductId;

    public UpdateProvisionedProductPropertiesInput withProvisionedProductId(String provisionedProductId) {
        this.provisionedProductId = provisionedProductId;
        return this;
    }
    
    @JsonProperty("ProvisionedProductProperties")
    public java.util.Map<String, String> provisionedProductProperties;

    public UpdateProvisionedProductPropertiesInput withProvisionedProductProperties(java.util.Map<String, String> provisionedProductProperties) {
        this.provisionedProductProperties = provisionedProductProperties;
        return this;
    }
    
    public UpdateProvisionedProductPropertiesInput(@JsonProperty("IdempotencyToken") String idempotencyToken, @JsonProperty("ProvisionedProductId") String provisionedProductId, @JsonProperty("ProvisionedProductProperties") java.util.Map<String, String> provisionedProductProperties) {
        this.idempotencyToken = idempotencyToken;
        this.provisionedProductId = provisionedProductId;
        this.provisionedProductProperties = provisionedProductProperties;
  }
}
