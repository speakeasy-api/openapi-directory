/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSchemaInput {
    @JsonProperty("SchemaId")
    public SchemaId schemaId;

    public DeleteSchemaInput withSchemaId(SchemaId schemaId) {
        this.schemaId = schemaId;
        return this;
    }
    
    public DeleteSchemaInput(@JsonProperty("SchemaId") SchemaId schemaId) {
        this.schemaId = schemaId;
  }
}
