/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateClusterVersionRequestBody {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;

    public UpdateClusterVersionRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    
    /**
     * The desired Kubernetes version following a successful update.
     */
    @JsonProperty("version")
    public String version;

    public UpdateClusterVersionRequestBody withVersion(String version) {
        this.version = version;
        return this;
    }
    
    public UpdateClusterVersionRequestBody(@JsonProperty("version") String version) {
        this.version = version;
  }
}
