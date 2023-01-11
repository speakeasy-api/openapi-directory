package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogListLinks
 * Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
 * 
**/
public class ChannelCatalogListLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public LinksAddChannelCatalogLink add;
    public ChannelCatalogListLinks withAdd(LinksAddChannelCatalogLink add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPColumns")
    public ExternalLinksCatalogGetBeezUpColumnsLink beezUPColumns;
    public ChannelCatalogListLinks withBeezUpColumns(ExternalLinksCatalogGetBeezUpColumnsLink beezUPColumns) {
        this.beezUPColumns = beezUPColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterOperators")
    public LinksGetChannelCatalogFilterOperatorsLink filterOperators;
    public ChannelCatalogListLinks withFilterOperators(LinksGetChannelCatalogFilterOperatorsLink filterOperators) {
        this.filterOperators = filterOperators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetChannelCatalogsLink self;
    public ChannelCatalogListLinks withSelf(LinksGetChannelCatalogsLink self) {
        this.self = self;
        return this;
    }
}