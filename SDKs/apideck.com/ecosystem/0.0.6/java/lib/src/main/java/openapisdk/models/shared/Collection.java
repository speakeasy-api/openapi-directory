package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Collection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_background_color")
    public String cardBackgroundColor;
    public Collection withCardBackgroundColor(String cardBackgroundColor) {
        this.cardBackgroundColor = cardBackgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_background_image")
    public File cardBackgroundImage;
    public Collection withCardBackgroundImage(File cardBackgroundImage) {
        this.cardBackgroundImage = cardBackgroundImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_columns")
    public Long cardColumns;
    public Collection withCardColumns(Long cardColumns) {
        this.cardColumns = cardColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_style")
    public String cardStyle;
    public Collection withCardStyle(String cardStyle) {
        this.cardStyle = cardStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public Collection withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Collection withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden_from_homepage")
    public Boolean hiddenFromHomepage;
    public Collection withHiddenFromHomepage(Boolean hiddenFromHomepage) {
        this.hiddenFromHomepage = hiddenFromHomepage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Collection withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public File logo;
    public Collection withLogo(File logo) {
        this.logo = logo;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Collection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public Long sequence;
    public Collection withSequence(Long sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_max_items_homepage")
    public Long showMaxItemsHomepage;
    public Collection withShowMaxItemsHomepage(Long showMaxItemsHomepage) {
        this.showMaxItemsHomepage = showMaxItemsHomepage;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public Collection withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translations")
    public Translation[] translations;
    public Collection withTranslations(Translation[] translations) {
        this.translations = translations;
        return this;
    }
    @JsonProperty("visible")
    public Boolean visible;
    public Collection withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}