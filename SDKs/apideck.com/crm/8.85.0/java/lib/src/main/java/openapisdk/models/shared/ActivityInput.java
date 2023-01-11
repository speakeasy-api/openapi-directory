package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public ActivityInput withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity_date")
    public String activityDate;
    public ActivityInput withActivityDate(String activityDate) {
        this.activityDate = activityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity_datetime")
    public String activityDatetime;
    public ActivityInput withActivityDatetime(String activityDatetime) {
        this.activityDatetime = activityDatetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all_day_event")
    public Boolean allDayEvent;
    public ActivityInput withAllDayEvent(Boolean allDayEvent) {
        this.allDayEvent = allDayEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public ActivityInput withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_id")
    public String assetId;
    public ActivityInput withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendees")
    public ActivityAttendeeInput[] attendees;
    public ActivityInput withAttendees(ActivityAttendeeInput[] attendees) {
        this.attendees = attendees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaign_id")
    public String campaignId;
    public ActivityInput withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("case_id")
    public String caseId;
    public ActivityInput withCaseId(String caseId) {
        this.caseId = caseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("child")
    public Boolean child;
    public ActivityInput withChild(Boolean child) {
        this.child = child;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_id")
    public String companyId;
    public ActivityInput withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_id")
    public String contactId;
    public ActivityInput withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contract_id")
    public String contractId;
    public ActivityInput withContractId(String contractId) {
        this.contractId = contractId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public CustomField[] customFields;
    public ActivityInput withCustomFields(CustomField[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_object_id")
    public String customObjectId;
    public ActivityInput withCustomObjectId(String customObjectId) {
        this.customObjectId = customObjectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public ActivityInput withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ActivityInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("done")
    public Boolean done;
    public ActivityInput withDone(Boolean done) {
        this.done = done;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_seconds")
    public Long durationSeconds;
    public ActivityInput withDurationSeconds(Long durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public String endDate;
    public ActivityInput withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_datetime")
    public String endDatetime;
    public ActivityInput withEndDatetime(String endDatetime) {
        this.endDatetime = endDatetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_sub_type")
    public String eventSubType;
    public ActivityInput withEventSubType(String eventSubType) {
        this.eventSubType = eventSubType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_event")
    public Boolean groupEvent;
    public ActivityInput withGroupEvent(Boolean groupEvent) {
        this.groupEvent = groupEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_event_type")
    public String groupEventType;
    public ActivityInput withGroupEventType(String groupEventType) {
        this.groupEventType = groupEventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lead_id")
    public String leadId;
    public ActivityInput withLeadId(String leadId) {
        this.leadId = leadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ActivityInput withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_address")
    public Address locationAddress;
    public ActivityInput withLocationAddress(Address locationAddress) {
        this.locationAddress = locationAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public ActivityInput withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opportunity_id")
    public String opportunityId;
    public ActivityInput withOpportunityId(String opportunityId) {
        this.opportunityId = opportunityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner_id")
    public String ownerId;
    public ActivityInput withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;
    public ActivityInput withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_id")
    public String productId;
    public ActivityInput withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrent")
    public Boolean recurrent;
    public ActivityInput withRecurrent(Boolean recurrent) {
        this.recurrent = recurrent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reminder_datetime")
    public String reminderDatetime;
    public ActivityInput withReminderDatetime(String reminderDatetime) {
        this.reminderDatetime = reminderDatetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reminder_set")
    public Boolean reminderSet;
    public ActivityInput withReminderSet(Boolean reminderSet) {
        this.reminderSet = reminderSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_as")
    public ActivityShowAsEnum showAs;
    public ActivityInput withShowAs(ActivityShowAsEnum showAs) {
        this.showAs = showAs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solution_id")
    public String solutionId;
    public ActivityInput withSolutionId(String solutionId) {
        this.solutionId = solutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_datetime")
    public String startDatetime;
    public ActivityInput withStartDatetime(String startDatetime) {
        this.startDatetime = startDatetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ActivityInput withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public ActivityTypeEnum type;
    public ActivityInput withType(ActivityTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public ActivityInput withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_conference_id")
    public String videoConferenceId;
    public ActivityInput withVideoConferenceId(String videoConferenceId) {
        this.videoConferenceId = videoConferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_conference_url")
    public String videoConferenceUrl;
    public ActivityInput withVideoConferenceUrl(String videoConferenceUrl) {
        this.videoConferenceUrl = videoConferenceUrl;
        return this;
    }
}