package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CatalogStoreIndexLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoImportInfo")
    public LinksAutoGetAutoImportConfigurationLink autoImportInfo;
    public CatalogStoreIndexLinks withAutoImportInfo(LinksAutoGetAutoImportConfigurationLink autoImportInfo) {
        this.autoImportInfo = autoImportInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogColumns")
    public LinksCatalogGetCatalogColumnsLink catalogColumns;
    public CatalogStoreIndexLinks withCatalogColumns(LinksCatalogGetCatalogColumnsLink catalogColumns) {
        this.catalogColumns = catalogColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public LinksCatalogGetCategoriesLink categories;
    public CatalogStoreIndexLinks withCategories(LinksCatalogGetCategoriesLink categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeExpression")
    public LinksCatalogComputeExpressionLink computeExpression;
    public CatalogStoreIndexLinks withComputeExpression(LinksCatalogComputeExpressionLink computeExpression) {
        this.computeExpression = computeExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customColumns")
    public LinksCatalogGetCustomColumnsLink customColumns;
    public CatalogStoreIndexLinks withCustomColumns(LinksCatalogGetCustomColumnsLink customColumns) {
        this.customColumns = customColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importations")
    public LinksImportationGetReportingsLink importations;
    public CatalogStoreIndexLinks withImportations(LinksImportationGetReportingsLink importations) {
        this.importations = importations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfiguration")
    public LinksImportationGetManualUpdateLastInputConfigLink inputConfiguration;
    public CatalogStoreIndexLinks withInputConfiguration(LinksImportationGetManualUpdateLastInputConfigLink inputConfiguration) {
        this.inputConfiguration = inputConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public LinksCatalogGetProductsLink products;
    public CatalogStoreIndexLinks withProducts(LinksCatalogGetProductsLink products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("randomProducts")
    public LinksCatalogGetRandomProductsLink randomProducts;
    public CatalogStoreIndexLinks withRandomProducts(LinksCatalogGetRandomProductsLink randomProducts) {
        this.randomProducts = randomProducts;
        return this;
    }
    @JsonProperty("self")
    public LinksCatalogStoreIndexLink self;
    public CatalogStoreIndexLinks withSelf(LinksCatalogStoreIndexLink self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startImportation")
    public LinksImportationStartManualUpdateLink startImportation;
    public CatalogStoreIndexLinks withStartImportation(LinksImportationStartManualUpdateLink startImportation) {
        this.startImportation = startImportation;
        return this;
    }
}