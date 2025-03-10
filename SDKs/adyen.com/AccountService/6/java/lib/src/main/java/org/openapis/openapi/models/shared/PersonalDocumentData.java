/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PersonalDocumentData {
    /**
     * The expiry date of the document, 
     *  in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public String expirationDate;

    public PersonalDocumentData withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    
    /**
     * The country where the document was issued, in the two-character 
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuerCountry")
    public String issuerCountry;

    public PersonalDocumentData withIssuerCountry(String issuerCountry) {
        this.issuerCountry = issuerCountry;
        return this;
    }
    
    /**
     * The state where the document was issued (if applicable).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuerState")
    public String issuerState;

    public PersonalDocumentData withIssuerState(String issuerState) {
        this.issuerState = issuerState;
        return this;
    }
    
    /**
     * The number in the document.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;

    public PersonalDocumentData withNumber(String number) {
        this.number = number;
        return this;
    }
    
    /**
     * The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.
     * 
     * To delete an existing entry for a document `type`, send only the `type` field in your request. 
     */
    @JsonProperty("type")
    public PersonalDocumentDataTypeEnum type;

    public PersonalDocumentData withType(PersonalDocumentDataTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public PersonalDocumentData(@JsonProperty("type") PersonalDocumentDataTypeEnum type) {
        this.type = type;
  }
}
