package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTableMetadataOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTableMetadataOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableMetadataList")
    public TableMetadata[] tableMetadataList;
    public ListTableMetadataOutput withTableMetadataList(TableMetadata[] tableMetadataList) {
        this.tableMetadataList = tableMetadataList;
        return this;
    }
}