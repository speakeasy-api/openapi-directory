/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreditNotesOneSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header,name=Authorization")
    public String apiKey;

    public CreditNotesOneSecurity withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    
    public CreditNotesOneSecurity(@JsonProperty("apiKey") String apiKey) {
        this.apiKey = apiKey;
  }
}
