package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CacheSettings
 * <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p>
**/
public class CacheSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedHTTPMethods")
    public String allowedHTTPMethods;
    public CacheSettings withAllowedHttpMethods(String allowedHTTPMethods) {
        this.allowedHTTPMethods = allowedHTTPMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cachedHTTPMethods")
    public String cachedHTTPMethods;
    public CacheSettings withCachedHttpMethods(String cachedHTTPMethods) {
        this.cachedHTTPMethods = cachedHTTPMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultTTL")
    public Long defaultTTL;
    public CacheSettings withDefaultTtl(Long defaultTTL) {
        this.defaultTTL = defaultTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwardedCookies")
    public CookieObject forwardedCookies;
    public CacheSettings withForwardedCookies(CookieObject forwardedCookies) {
        this.forwardedCookies = forwardedCookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwardedHeaders")
    public HeaderObject forwardedHeaders;
    public CacheSettings withForwardedHeaders(HeaderObject forwardedHeaders) {
        this.forwardedHeaders = forwardedHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwardedQueryStrings")
    public QueryStringObject forwardedQueryStrings;
    public CacheSettings withForwardedQueryStrings(QueryStringObject forwardedQueryStrings) {
        this.forwardedQueryStrings = forwardedQueryStrings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumTTL")
    public Long maximumTTL;
    public CacheSettings withMaximumTtl(Long maximumTTL) {
        this.maximumTTL = maximumTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumTTL")
    public Long minimumTTL;
    public CacheSettings withMinimumTtl(Long minimumTTL) {
        this.minimumTTL = minimumTTL;
        return this;
    }
}