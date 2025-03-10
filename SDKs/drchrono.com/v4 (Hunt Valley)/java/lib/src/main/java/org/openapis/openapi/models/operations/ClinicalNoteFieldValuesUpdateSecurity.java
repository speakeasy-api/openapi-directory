/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ClinicalNoteFieldValuesUpdateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2,name=Authorization")
    public String drchronoOauth2;

    public ClinicalNoteFieldValuesUpdateSecurity withDrchronoOauth2(String drchronoOauth2) {
        this.drchronoOauth2 = drchronoOauth2;
        return this;
    }
    
    public ClinicalNoteFieldValuesUpdateSecurity(@JsonProperty("drchrono_oauth2") String drchronoOauth2) {
        this.drchronoOauth2 = drchronoOauth2;
  }
}
