package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("child_event_count")
    public Integer childEventCount;
    public Event withChildEventCount(Integer childEventCount) {
        this.childEventCount = childEventCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editorial_segments")
    public String[] editorialSegments;
    public Event withEditorialSegments(String[] editorialSegments) {
        this.editorialSegments = editorialSegments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hero_image")
    public HeroImage heroImage;
    public Event withHeroImage(HeroImage heroImage) {
        this.heroImage = heroImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public Event withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_count")
    public Integer imageCount;
    public Event withImageCount(Integer imageCount) {
        this.imageCount = imageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public LocationEvent location;
    public Event withLocation(LocationEvent location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Event withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_date")
    public OffsetDateTime startDate;
    public Event withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
}