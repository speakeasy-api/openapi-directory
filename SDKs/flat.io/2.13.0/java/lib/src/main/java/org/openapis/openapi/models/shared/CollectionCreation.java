/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CollectionCreation {
    /**
     * The collection main privacy mode.
     * - `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.
     * 
     */
    @JsonProperty("privacy")
    public CollectionPrivacyEnum privacy;

    public CollectionCreation withPrivacy(CollectionPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    
    /**
     * The title of the collection
     */
    @JsonProperty("title")
    public String title;

    public CollectionCreation withTitle(String title) {
        this.title = title;
        return this;
    }
    
    public CollectionCreation(@JsonProperty("privacy") CollectionPrivacyEnum privacy, @JsonProperty("title") String title) {
        this.privacy = privacy;
        this.title = title;
  }
}
