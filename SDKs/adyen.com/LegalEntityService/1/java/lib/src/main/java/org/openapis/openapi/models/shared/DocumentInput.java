/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class DocumentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment")
    public Attachment attachment;

    public DocumentInput withAttachment(Attachment attachment) {
        this.attachment = attachment;
        return this;
    }
    
    /**
     * Array that contains the document. The array supports multiple attachments for uploading different sides or pages of a document.
     */
    @JsonProperty("attachments")
    public Attachment[] attachments;

    public DocumentInput withAttachments(Attachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
    
    /**
     * Your description for the document.
     */
    @JsonProperty("description")
    public String description;

    public DocumentInput withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * The expiry date of the document, in YYYY-MM-DD format.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiryDate")
    public String expiryDate;

    public DocumentInput withExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
        return this;
    }
    
    /**
     * The filename of the document.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;

    public DocumentInput withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    
    /**
     * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuerCountry")
    public String issuerCountry;

    public DocumentInput withIssuerCountry(String issuerCountry) {
        this.issuerCountry = issuerCountry;
        return this;
    }
    
    /**
     * The state or province where the document was issued (AU only).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuerState")
    public String issuerState;

    public DocumentInput withIssuerState(String issuerState) {
        this.issuerState = issuerState;
        return this;
    }
    
    /**
     * The number in the document.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;

    public DocumentInput withNumber(String number) {
        this.number = number;
        return this;
    }
    
    @JsonProperty("owner")
    public OwnerEntity owner;

    public DocumentInput withOwner(OwnerEntity owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * Type of document, used when providing an ID number or uploading a document. The possible values depend on the legal entity type.
     * 
     * When providing ID numbers:
     * * For **individual**, the `type` values can be **driversLicense**, **identityCard**, **nationalIdNumber**, or **passport**.
     * 
     * When uploading documents:
     * * For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**, **taxDocument**, **proofOfOwnership**, or **proofOfIndustry**. 
     * 
     * * For **individual**, the `type` values can be **identityCard**, **driversLicense**, **proofOfNationalIdNumber**, **proofOfResidency**, or **proofOfIndustry**.
     * 
     * * Use **bankStatement** to upload documents for a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
     */
    @JsonProperty("type")
    public DocumentTypeEnum type;

    public DocumentInput withType(DocumentTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public DocumentInput(@JsonProperty("attachments") Attachment[] attachments, @JsonProperty("description") String description, @JsonProperty("owner") OwnerEntity owner, @JsonProperty("type") DocumentTypeEnum type) {
        this.attachments = attachments;
        this.description = description;
        this.owner = owner;
        this.type = type;
  }
}
