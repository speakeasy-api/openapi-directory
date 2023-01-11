package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchBoulderEmailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchBoulderEmailsQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchBoulderEmailsQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchBoulderEmailsQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchBoulderEmailsQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchBoulderEmailsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchBoulderEmailsQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchBoulderEmailsQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchBoulderEmailsQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchBoulderEmailsQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchBoulderEmailsQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchBoulderEmailsQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchBoulderEmailsQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchBoulderEmailsQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchBoulderEmailsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_emails.email_subject")
    public String searchDbBoulderEmailsEmailSubject;
    public SearchBoulderEmailsQueryParams withSearchDbBoulderEmailsEmailSubject(String searchDbBoulderEmailsEmailSubject) {
        this.searchDbBoulderEmailsEmailSubject = searchDbBoulderEmailsEmailSubject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_emails.plain_text_body")
    public String searchDbBoulderEmailsPlainTextBody;
    public SearchBoulderEmailsQueryParams withSearchDbBoulderEmailsPlainTextBody(String searchDbBoulderEmailsPlainTextBody) {
        this.searchDbBoulderEmailsPlainTextBody = searchDbBoulderEmailsPlainTextBody;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_emails.received_date")
    public String searchDbBoulderEmailsReceivedDate;
    public SearchBoulderEmailsQueryParams withSearchDbBoulderEmailsReceivedDate(String searchDbBoulderEmailsReceivedDate) {
        this.searchDbBoulderEmailsReceivedDate = searchDbBoulderEmailsReceivedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_emails.sent_cc")
    public String searchDbBoulderEmailsSentCc;
    public SearchBoulderEmailsQueryParams withSearchDbBoulderEmailsSentCc(String searchDbBoulderEmailsSentCc) {
        this.searchDbBoulderEmailsSentCc = searchDbBoulderEmailsSentCc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_emails.sent_from")
    public String searchDbBoulderEmailsSentFrom;
    public SearchBoulderEmailsQueryParams withSearchDbBoulderEmailsSentFrom(String searchDbBoulderEmailsSentFrom) {
        this.searchDbBoulderEmailsSentFrom = searchDbBoulderEmailsSentFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_emails.sent_to")
    public String searchDbBoulderEmailsSentTo;
    public SearchBoulderEmailsQueryParams withSearchDbBoulderEmailsSentTo(String searchDbBoulderEmailsSentTo) {
        this.searchDbBoulderEmailsSentTo = searchDbBoulderEmailsSentTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchBoulderEmailsQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchBoulderEmailsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchBoulderEmailsQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}