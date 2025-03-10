/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SitemapsReport - Successful operation
 */
public class SitemapsReport {
    @JsonProperty("count")
    public Long count;

    public SitemapsReport withCount(Long count) {
        this.count = count;
        return this;
    }
    
    @JsonProperty("errors")
    public SitemapsReportSitemap[] errors;

    public SitemapsReport withErrors(SitemapsReportSitemap[] errors) {
        this.errors = errors;
        return this;
    }
    
    @JsonProperty("sitemap_indexes")
    public SitemapsReportSitemap[] sitemapIndexes;

    public SitemapsReport withSitemapIndexes(SitemapsReportSitemap[] sitemapIndexes) {
        this.sitemapIndexes = sitemapIndexes;
        return this;
    }
    
    @JsonProperty("sitemap_only")
    public SitemapsReportOnly sitemapOnly;

    public SitemapsReport withSitemapOnly(SitemapsReportOnly sitemapOnly) {
        this.sitemapOnly = sitemapOnly;
        return this;
    }
    
    @JsonProperty("sitemaps")
    public SitemapsReportSitemap[] sitemaps;

    public SitemapsReport withSitemaps(SitemapsReportSitemap[] sitemaps) {
        this.sitemaps = sitemaps;
        return this;
    }
    
    public SitemapsReport(@JsonProperty("count") Long count, @JsonProperty("errors") SitemapsReportSitemap[] errors, @JsonProperty("sitemap_indexes") SitemapsReportSitemap[] sitemapIndexes, @JsonProperty("sitemap_only") SitemapsReportOnly sitemapOnly, @JsonProperty("sitemaps") SitemapsReportSitemap[] sitemaps) {
        this.count = count;
        this.errors = errors;
        this.sitemapIndexes = sitemapIndexes;
        this.sitemapOnly = sitemapOnly;
        this.sitemaps = sitemaps;
  }
}
