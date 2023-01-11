package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CatalogIndexLovLinks {
    @JsonProperty("beezUPColumnDataTypeLov")
    public BeezUpCommonLovLink3 beezUPColumnDataTypeLov;
    public CatalogIndexLovLinks withBeezUpColumnDataTypeLov(BeezUpCommonLovLink3 beezUPColumnDataTypeLov) {
        this.beezUPColumnDataTypeLov = beezUPColumnDataTypeLov;
        return this;
    }
    @JsonProperty("beezUPColumnDisplayGroupLov")
    public BeezUpCommonLovLink3 beezUPColumnDisplayGroupLov;
    public CatalogIndexLovLinks withBeezUpColumnDisplayGroupLov(BeezUpCommonLovLink3 beezUPColumnDisplayGroupLov) {
        this.beezUPColumnDisplayGroupLov = beezUPColumnDisplayGroupLov;
        return this;
    }
    @JsonProperty("beezUPColumnImportanceLov")
    public BeezUpCommonLovLink3 beezUPColumnImportanceLov;
    public CatalogIndexLovLinks withBeezUpColumnImportanceLov(BeezUpCommonLovLink3 beezUPColumnImportanceLov) {
        this.beezUPColumnImportanceLov = beezUPColumnImportanceLov;
        return this;
    }
    @JsonProperty("beezUPColumnLov")
    public BeezUpCommonLovLink3 beezUPColumnLov;
    public CatalogIndexLovLinks withBeezUpColumnLov(BeezUpCommonLovLink3 beezUPColumnLov) {
        this.beezUPColumnLov = beezUPColumnLov;
        return this;
    }
    @JsonProperty("compareOptionLov")
    public BeezUpCommonLovLink3 compareOptionLov;
    public CatalogIndexLovLinks withCompareOptionLov(BeezUpCommonLovLink3 compareOptionLov) {
        this.compareOptionLov = compareOptionLov;
        return this;
    }
    @JsonProperty("duplicateProductValueStrategyLov")
    public BeezUpCommonLovLink3 duplicateProductValueStrategyLov;
    public CatalogIndexLovLinks withDuplicateProductValueStrategyLov(BeezUpCommonLovLink3 duplicateProductValueStrategyLov) {
        this.duplicateProductValueStrategyLov = duplicateProductValueStrategyLov;
        return this;
    }
}