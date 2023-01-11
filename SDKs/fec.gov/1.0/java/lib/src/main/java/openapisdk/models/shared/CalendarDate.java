package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalendarDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all_day")
    public Boolean allDay;
    public CalendarDate withAllDay(Boolean allDay) {
        this.allDay = allDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendar_category_id")
    public Integer calendarCategoryId;
    public CalendarDate withCalendarCategoryId(Integer calendarCategoryId) {
        this.calendarCategoryId = calendarCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public CalendarDate withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CalendarDate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public String endDate;
    public CalendarDate withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_id")
    public Integer eventId;
    public CalendarDate withEventId(Integer eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public CalendarDate withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public String startDate;
    public CalendarDate withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String[] state;
    public CalendarDate withState(String[] state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public CalendarDate withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CalendarDate withUrl(String url) {
        this.url = url;
        return this;
    }
}