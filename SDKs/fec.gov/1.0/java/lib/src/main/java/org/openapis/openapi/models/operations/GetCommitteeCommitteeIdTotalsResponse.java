/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetCommitteeCommitteeIdTotalsResponse {
    
    public org.openapis.openapi.models.shared.CommitteeTotalsPage committeeTotalsPage;

    public GetCommitteeCommitteeIdTotalsResponse withCommitteeTotalsPage(org.openapis.openapi.models.shared.CommitteeTotalsPage committeeTotalsPage) {
        this.committeeTotalsPage = committeeTotalsPage;
        return this;
    }
    
    
    public String contentType;

    public GetCommitteeCommitteeIdTotalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetCommitteeCommitteeIdTotalsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetCommitteeCommitteeIdTotalsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetCommitteeCommitteeIdTotalsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
