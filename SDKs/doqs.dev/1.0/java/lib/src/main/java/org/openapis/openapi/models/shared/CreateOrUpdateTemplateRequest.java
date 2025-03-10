/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateOrUpdateTemplateRequest {
    @JsonProperty("components")
    public java.util.Map<String, Object>[] components;

    public CreateOrUpdateTemplateRequest withComponents(java.util.Map<String, Object>[] components) {
        this.components = components;
        return this;
    }
    
    @JsonProperty("css")
    public String css;

    public CreateOrUpdateTemplateRequest withCss(String css) {
        this.css = css;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("footer_html")
    public String footerHtml;

    public CreateOrUpdateTemplateRequest withFooterHtml(String footerHtml) {
        this.footerHtml = footerHtml;
        return this;
    }
    
    /**
     * An enumeration.
     */
    @JsonProperty("format")
    public FormatEnum format;

    public CreateOrUpdateTemplateRequest withFormat(FormatEnum format) {
        this.format = format;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header_html")
    public String headerHtml;

    public CreateOrUpdateTemplateRequest withHeaderHtml(String headerHtml) {
        this.headerHtml = headerHtml;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("margin")
    public CreateOrUpdateTemplateRequestMargin margin;

    public CreateOrUpdateTemplateRequest withMargin(CreateOrUpdateTemplateRequestMargin margin) {
        this.margin = margin;
        return this;
    }
    
    @JsonProperty("name")
    public String name;

    public CreateOrUpdateTemplateRequest withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * An enumeration.
     */
    @JsonProperty("orientation")
    public OrientationEnum orientation;

    public CreateOrUpdateTemplateRequest withOrientation(OrientationEnum orientation) {
        this.orientation = orientation;
        return this;
    }
    
    @JsonProperty("preview_payload")
    public java.util.Map<String, Object> previewPayload;

    public CreateOrUpdateTemplateRequest withPreviewPayload(java.util.Map<String, Object> previewPayload) {
        this.previewPayload = previewPayload;
        return this;
    }
    
    @JsonProperty("template_html")
    public String templateHtml;

    public CreateOrUpdateTemplateRequest withTemplateHtml(String templateHtml) {
        this.templateHtml = templateHtml;
        return this;
    }
    
    public CreateOrUpdateTemplateRequest(@JsonProperty("components") java.util.Map<String, Object>[] components, @JsonProperty("css") String css, @JsonProperty("format") FormatEnum format, @JsonProperty("name") String name, @JsonProperty("orientation") OrientationEnum orientation, @JsonProperty("preview_payload") java.util.Map<String, Object> previewPayload, @JsonProperty("template_html") String templateHtml) {
        this.components = components;
        this.css = css;
        this.format = format;
        this.name = name;
        this.orientation = orientation;
        this.previewPayload = previewPayload;
        this.templateHtml = templateHtml;
  }
}
