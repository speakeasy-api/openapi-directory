/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetUploadedDocumentsResponse - OK - the request has succeeded.
 */
public class GetUploadedDocumentsResponse {
    /**
     * A list of the documents and their details.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentDetails")
    public DocumentDetail[] documentDetails;

    public GetUploadedDocumentsResponse withDocumentDetails(DocumentDetail[] documentDetails) {
        this.documentDetails = documentDetails;
        return this;
    }
    
    /**
     * Contains field validation errors that would prevent requests from being processed.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalidFields")
    public ErrorFieldType[] invalidFields;

    public GetUploadedDocumentsResponse withInvalidFields(ErrorFieldType[] invalidFields) {
        this.invalidFields = invalidFields;
        return this;
    }
    
    /**
     * The reference of a request. Can be used to uniquely identify the request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pspReference")
    public String pspReference;

    public GetUploadedDocumentsResponse withPspReference(String pspReference) {
        this.pspReference = pspReference;
        return this;
    }
    
    /**
     * The result code.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultCode")
    public String resultCode;

    public GetUploadedDocumentsResponse withResultCode(String resultCode) {
        this.resultCode = resultCode;
        return this;
    }
    
    public GetUploadedDocumentsResponse(){}
}
