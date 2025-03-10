/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableLDAPSRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;

    public DisableLDAPSRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    
    @JsonProperty("Type")
    public LDAPSTypeEnum type;

    public DisableLDAPSRequest withType(LDAPSTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public DisableLDAPSRequest(@JsonProperty("DirectoryId") String directoryId, @JsonProperty("Type") LDAPSTypeEnum type) {
        this.directoryId = directoryId;
        this.type = type;
  }
}
