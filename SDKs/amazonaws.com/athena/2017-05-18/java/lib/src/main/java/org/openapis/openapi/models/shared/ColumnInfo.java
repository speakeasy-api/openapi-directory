/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ColumnInfo - Information about the columns in a query execution result.
 */
public class ColumnInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CaseSensitive")
    public Boolean caseSensitive;

    public ColumnInfo withCaseSensitive(Boolean caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogName")
    public String catalogName;

    public ColumnInfo withCatalogName(String catalogName) {
        this.catalogName = catalogName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Label")
    public String label;

    public ColumnInfo withLabel(String label) {
        this.label = label;
        return this;
    }
    
    @JsonProperty("Name")
    public String name;

    public ColumnInfo withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Nullable")
    public ColumnNullableEnum nullable;

    public ColumnInfo withNullable(ColumnNullableEnum nullable) {
        this.nullable = nullable;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Precision")
    public Long precision;

    public ColumnInfo withPrecision(Long precision) {
        this.precision = precision;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Scale")
    public Long scale;

    public ColumnInfo withScale(Long scale) {
        this.scale = scale;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaName")
    public String schemaName;

    public ColumnInfo withSchemaName(String schemaName) {
        this.schemaName = schemaName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableName")
    public String tableName;

    public ColumnInfo withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    
    @JsonProperty("Type")
    public String type;

    public ColumnInfo withType(String type) {
        this.type = type;
        return this;
    }
    
    public ColumnInfo(@JsonProperty("Name") String name, @JsonProperty("Type") String type) {
        this.name = name;
        this.type = type;
  }
}
