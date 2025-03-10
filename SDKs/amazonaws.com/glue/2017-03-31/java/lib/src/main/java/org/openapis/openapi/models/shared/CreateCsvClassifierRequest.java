/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateCsvClassifierRequest - Specifies a custom CSV classifier for &lt;code&gt;CreateClassifier&lt;/code&gt; to create.
 */
public class CreateCsvClassifierRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowSingleColumn")
    public Boolean allowSingleColumn;

    public CreateCsvClassifierRequest withAllowSingleColumn(Boolean allowSingleColumn) {
        this.allowSingleColumn = allowSingleColumn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainsHeader")
    public CsvHeaderOptionEnum containsHeader;

    public CreateCsvClassifierRequest withContainsHeader(CsvHeaderOptionEnum containsHeader) {
        this.containsHeader = containsHeader;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomDatatypeConfigured")
    public Boolean customDatatypeConfigured;

    public CreateCsvClassifierRequest withCustomDatatypeConfigured(Boolean customDatatypeConfigured) {
        this.customDatatypeConfigured = customDatatypeConfigured;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomDatatypes")
    public String[] customDatatypes;

    public CreateCsvClassifierRequest withCustomDatatypes(String[] customDatatypes) {
        this.customDatatypes = customDatatypes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Delimiter")
    public String delimiter;

    public CreateCsvClassifierRequest withDelimiter(String delimiter) {
        this.delimiter = delimiter;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableValueTrimming")
    public Boolean disableValueTrimming;

    public CreateCsvClassifierRequest withDisableValueTrimming(Boolean disableValueTrimming) {
        this.disableValueTrimming = disableValueTrimming;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Header")
    public String[] header;

    public CreateCsvClassifierRequest withHeader(String[] header) {
        this.header = header;
        return this;
    }
    
    @JsonProperty("Name")
    public String name;

    public CreateCsvClassifierRequest withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuoteSymbol")
    public String quoteSymbol;

    public CreateCsvClassifierRequest withQuoteSymbol(String quoteSymbol) {
        this.quoteSymbol = quoteSymbol;
        return this;
    }
    
    public CreateCsvClassifierRequest(@JsonProperty("Name") String name) {
        this.name = name;
  }
}
