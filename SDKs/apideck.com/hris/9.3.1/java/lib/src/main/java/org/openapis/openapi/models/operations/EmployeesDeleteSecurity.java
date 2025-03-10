/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class EmployeesDeleteSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header,name=Authorization")
    public String apiKey;

    public EmployeesDeleteSecurity withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    
    public EmployeesDeleteSecurity(@JsonProperty("apiKey") String apiKey) {
        this.apiKey = apiKey;
  }
}
