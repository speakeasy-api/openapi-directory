package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportationCustomColumnLinks {
    @JsonProperty("delete")
    public LinksCatalogDeleteCustomColumnLink delete;
    public ImportationCustomColumnLinks withDelete(LinksCatalogDeleteCustomColumnLink delete) {
        this.delete = delete;
        return this;
    }
    @JsonProperty("expression")
    public LinksCatalogGetCustomColumnExpressionLink expression;
    public ImportationCustomColumnLinks withExpression(LinksCatalogGetCustomColumnExpressionLink expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("map")
    public LinksImportationMapCustomColumnLink map;
    public ImportationCustomColumnLinks withMap(LinksImportationMapCustomColumnLink map) {
        this.map = map;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productSampleValue")
    public LinksImportationGetProductSampleCustomColumnValueLink productSampleValue;
    public ImportationCustomColumnLinks withProductSampleValue(LinksImportationGetProductSampleCustomColumnValueLink productSampleValue) {
        this.productSampleValue = productSampleValue;
        return this;
    }
    @JsonProperty("save")
    public LinksImportationSaveCustomColumnLink save;
    public ImportationCustomColumnLinks withSave(LinksImportationSaveCustomColumnLink save) {
        this.save = save;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unmap")
    public LinksImportationUnmapCustomColumnLink unmap;
    public ImportationCustomColumnLinks withUnmap(LinksImportationUnmapCustomColumnLink unmap) {
        this.unmap = unmap;
        return this;
    }
}