package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PepOrderRequestBody {
    @SpeakeasyMetadata("form:name=Aliases")
    public String aliases;
    public PepOrderRequestBody withAliases(String aliases) {
        this.aliases = aliases;
        return this;
    }
    @SpeakeasyMetadata("form:name=Country")
    public String country;
    public PepOrderRequestBody withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("form:name=DOB")
    public String dob;
    public PepOrderRequestBody withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @SpeakeasyMetadata("form:name=FamilyName")
    public String familyName;
    public PepOrderRequestBody withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Filters")
    public String filters;
    public PepOrderRequestBody withFilters(String filters) {
        this.filters = filters;
        return this;
    }
    @SpeakeasyMetadata("form:name=GivenName")
    public String givenName;
    public PepOrderRequestBody withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
    @SpeakeasyMetadata("form:name=LEI")
    public String lei;
    public PepOrderRequestBody withLei(String lei) {
        this.lei = lei;
        return this;
    }
    @SpeakeasyMetadata("form:name=Locale")
    public String locale;
    public PepOrderRequestBody withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("form:name=Medialists")
    public String medialists;
    public PepOrderRequestBody withMedialists(String medialists) {
        this.medialists = medialists;
        return this;
    }
    @SpeakeasyMetadata("form:name=MiddleName")
    public String middleName;
    public PepOrderRequestBody withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Monitoring")
    public Boolean monitoring;
    public PepOrderRequestBody withMonitoring(Boolean monitoring) {
        this.monitoring = monitoring;
        return this;
    }
    @SpeakeasyMetadata("form:name=Peplists")
    public String peplists;
    public PepOrderRequestBody withPeplists(String peplists) {
        this.peplists = peplists;
        return this;
    }
    @SpeakeasyMetadata("form:name=Region")
    public String region;
    public PepOrderRequestBody withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmartMatch")
    public Boolean smartMatch;
    public PepOrderRequestBody withSmartMatch(Boolean smartMatch) {
        this.smartMatch = smartMatch;
        return this;
    }
    @SpeakeasyMetadata("form:name=Watchlists")
    public String watchlists;
    public PepOrderRequestBody withWatchlists(String watchlists) {
        this.watchlists = watchlists;
        return this;
    }
    @SpeakeasyMetadata("form:name=Webhook")
    public String webhook;
    public PepOrderRequestBody withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}