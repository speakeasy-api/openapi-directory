package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class EventList {
    public OffsetDateTime date;
    public EventList withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    public java.util.Map<String, Object>[] eventCategories;
    public EventList withEventCategories(java.util.Map<String, Object>[] eventCategories) {
        this.eventCategories = eventCategories;
        return this;
    }
    public String message;
    public EventList withMessage(String message) {
        this.message = message;
        return this;
    }
    public String sourceIdentifier;
    public EventList withSourceIdentifier(String sourceIdentifier) {
        this.sourceIdentifier = sourceIdentifier;
        return this;
    }
    public SourceTypeEnum sourceType;
    public EventList withSourceType(SourceTypeEnum sourceType) {
        this.sourceType = sourceType;
        return this;
    }
}