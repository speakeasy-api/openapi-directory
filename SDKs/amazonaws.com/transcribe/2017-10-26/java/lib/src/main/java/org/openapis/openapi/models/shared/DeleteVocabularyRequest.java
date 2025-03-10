/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteVocabularyRequest {
    @JsonProperty("VocabularyName")
    public String vocabularyName;

    public DeleteVocabularyRequest withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
    
    public DeleteVocabularyRequest(@JsonProperty("VocabularyName") String vocabularyName) {
        this.vocabularyName = vocabularyName;
  }
}
