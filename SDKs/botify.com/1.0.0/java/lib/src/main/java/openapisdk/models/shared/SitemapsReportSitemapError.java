package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SitemapsReportSitemapError {
    @JsonProperty("message")
    public String message;
    public SitemapsReportSitemapError withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public SitemapsReportSitemapError withType(String type) {
        this.type = type;
        return this;
    }
}