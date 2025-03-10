/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PostApiInvoiceUpdatecategoryJsonRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.InvoiceCategoryUpdateApiModel invoiceCategoryUpdateApiModel;

    public PostApiInvoiceUpdatecategoryJsonRequest withInvoiceCategoryUpdateApiModel(org.openapis.openapi.models.shared.InvoiceCategoryUpdateApiModel invoiceCategoryUpdateApiModel) {
        this.invoiceCategoryUpdateApiModel = invoiceCategoryUpdateApiModel;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-auth-key")
    public String xAuthKey;

    public PostApiInvoiceUpdatecategoryJsonRequest withXAuthKey(String xAuthKey) {
        this.xAuthKey = xAuthKey;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-auth-secret")
    public String xAuthSecret;

    public PostApiInvoiceUpdatecategoryJsonRequest withXAuthSecret(String xAuthSecret) {
        this.xAuthSecret = xAuthSecret;
        return this;
    }
    
    public PostApiInvoiceUpdatecategoryJsonRequest(@JsonProperty("InvoiceCategoryUpdateApiModel") org.openapis.openapi.models.shared.InvoiceCategoryUpdateApiModel invoiceCategoryUpdateApiModel, @JsonProperty("x-auth-key") String xAuthKey, @JsonProperty("x-auth-secret") String xAuthSecret) {
        this.invoiceCategoryUpdateApiModel = invoiceCategoryUpdateApiModel;
        this.xAuthKey = xAuthKey;
        this.xAuthSecret = xAuthSecret;
  }
}
