/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IndexStatistics - Provides information about the number of documents and the number of questions and answers in an index.
 */
public class IndexStatistics {
    @JsonProperty("FaqStatistics")
    public FaqStatistics faqStatistics;

    public IndexStatistics withFaqStatistics(FaqStatistics faqStatistics) {
        this.faqStatistics = faqStatistics;
        return this;
    }
    
    @JsonProperty("TextDocumentStatistics")
    public TextDocumentStatistics textDocumentStatistics;

    public IndexStatistics withTextDocumentStatistics(TextDocumentStatistics textDocumentStatistics) {
        this.textDocumentStatistics = textDocumentStatistics;
        return this;
    }
    
    public IndexStatistics(@JsonProperty("FaqStatistics") FaqStatistics faqStatistics, @JsonProperty("TextDocumentStatistics") TextDocumentStatistics textDocumentStatistics) {
        this.faqStatistics = faqStatistics;
        this.textDocumentStatistics = textDocumentStatistics;
  }
}
