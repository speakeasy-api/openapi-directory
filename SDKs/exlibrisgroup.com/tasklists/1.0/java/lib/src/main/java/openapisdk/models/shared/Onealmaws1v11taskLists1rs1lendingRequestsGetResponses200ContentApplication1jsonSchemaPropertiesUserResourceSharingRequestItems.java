package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems
 * Resource sharing request Object.
**/
public class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additional_barcode")
    public String[] additionalBarcode;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withAdditionalBarcode(String[] additionalBarcode) {
        this.additionalBarcode = additionalBarcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additional_person_name")
    public String additionalPersonName;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withAdditionalPersonName(String additionalPersonName) {
        this.additionalPersonName = additionalPersonName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agree_to_copyright_terms")
    public Boolean agreeToCopyrightTerms;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withAgreeToCopyrightTerms(Boolean agreeToCopyrightTerms) {
        this.agreeToCopyrightTerms = agreeToCopyrightTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_other_formats")
    public Boolean allowOtherFormats;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withAllowOtherFormats(Boolean allowOtherFormats) {
        this.allowOtherFormats = allowOtherFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author_initials")
    public String authorInitials;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withAuthorInitials(String authorInitials) {
        this.authorInitials = authorInitials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcode")
    public String barcode;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withBarcode(String barcode) {
        this.barcode = barcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bib_note")
    public String bibNote;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withBibNote(String bibNote) {
        this.bibNote = bibNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_number")
    public String callNumber;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withCallNumber(String callNumber) {
        this.callNumber = callNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chapter")
    public String chapter;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withChapter(String chapter) {
        this.chapter = chapter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chapter_author")
    public String chapterAuthor;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withChapterAuthor(String chapterAuthor) {
        this.chapterAuthor = chapterAuthor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chapter_title")
    public String chapterTitle;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withChapterTitle(String chapterTitle) {
        this.chapterTitle = chapterTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("citation_type")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCitationType citationType;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withCitationType(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCitationType citationType) {
        this.citationType = citationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright_status")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCopyrightStatus copyrightStatus;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withCopyrightStatus(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCopyrightStatus copyrightStatus) {
        this.copyrightStatus = copyrightStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public LocalDate createdDate;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_time")
    public OffsetDateTime createdTime;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("edition")
    public String edition;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withEdition(String edition) {
        this.edition = edition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editor")
    public String editor;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withEditor(String editor) {
        this.editor = editor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_page")
    public String endPage;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withEndPage(String endPage) {
        this.endPage = endPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_id")
    public String externalId;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFormat format;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withFormat(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFormat format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fund")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFund fund;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withFund(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFund fund) {
        this.fund = fund;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_active_notes")
    public Boolean hasActiveNotes;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withHasActiveNotes(Boolean hasActiveNotes) {
        this.hasActiveNotes = hasActiveNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbn")
    public String isbn;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withIsbn(String isbn) {
        this.isbn = isbn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issn")
    public String issn;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withIssn(String issn) {
        this.issn = issn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue")
    public String issue;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withIssue(String issue) {
        this.issue = issue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("journal_title")
    public String journalTitle;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withJournalTitle(String journalTitle) {
        this.journalTitle = journalTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_interest_date")
    public LocalDate lastInterestDate;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withLastInterestDate(LocalDate lastInterestDate) {
        this.lastInterestDate = lastInterestDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_modified_date")
    public LocalDate lastModifiedDate;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withLastModifiedDate(LocalDate lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_modified_time")
    public OffsetDateTime lastModifiedTime;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lcc_number")
    public String lccNumber;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withLccNumber(String lccNumber) {
        this.lccNumber = lccNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level_of_service")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsLevelOfService levelOfService;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withLevelOfService(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsLevelOfService levelOfService) {
        this.levelOfService = levelOfService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lost_damaged_fee")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost lostDamagedFee;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withLostDamagedFee(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost lostDamagedFee) {
        this.lostDamagedFee = lostDamagedFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximum_fee")
    public Float maximumFee;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withMaximumFee(Float maximumFee) {
        this.maximumFee = maximumFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mms_id")
    public String mmsId;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withMmsId(String mmsId) {
        this.mmsId = mmsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("need_patron_info")
    public Boolean needPatronInfo;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withNeedPatronInfo(Boolean needPatronInfo) {
        this.needPatronInfo = needPatronInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oclc_number")
    public String oclcNumber;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withOclcNumber(String oclcNumber) {
        this.oclcNumber = oclcNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_standard_id")
    public String otherStandardId;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withOtherStandardId(String otherStandardId) {
        this.otherStandardId = otherStandardId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public String pages;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withPages(String pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("part")
    public String part;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withPart(String part) {
        this.part = part;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partner")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPartner partner;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withPartner(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPartner partner) {
        this.partner = partner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_location")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPickupLocation pickupLocation;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withPickupLocation(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPickupLocation pickupLocation) {
        this.pickupLocation = pickupLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_location_type")
    public String pickupLocationType;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withPickupLocationType(String pickupLocationType) {
        this.pickupLocationType = pickupLocationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("place_of_publication")
    public String placeOfPublication;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withPlaceOfPublication(String placeOfPublication) {
        this.placeOfPublication = placeOfPublication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmid")
    public String pmid;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withPmid(String pmid) {
        this.pmid = pmid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_send_method")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPreferredSendMethod preferredSendMethod;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withPreferredSendMethod(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPreferredSendMethod preferredSendMethod) {
        this.preferredSendMethod = preferredSendMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printed")
    public Boolean printed;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withPrinted(Boolean printed) {
        this.printed = printed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reading_room")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsReadingRoom readingRoom;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withReadingRoom(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsReadingRoom readingRoom) {
        this.readingRoom = readingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receive_cost")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost receiveCost;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withReceiveCost(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost receiveCost) {
        this.receiveCost = receiveCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_record_id")
    public String remoteRecordId;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withRemoteRecordId(String remoteRecordId) {
        this.remoteRecordId = remoteRecordId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reported")
    public Boolean reported;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withReported(Boolean reported) {
        this.reported = reported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_cost")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost requestCost;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withRequestCost(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost requestCost) {
        this.requestCost = requestCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_language")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequestedLanguage requestedLanguage;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withRequestedLanguage(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequestedLanguage requestedLanguage) {
        this.requestedLanguage = requestedLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_media")
    public String requestedMedia;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withRequestedMedia(String requestedMedia) {
        this.requestedMedia = requestedMedia;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requester")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequester requester;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withRequester(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequester requester) {
        this.requester = requester;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rs_note")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRsNote[] rsNote;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withRsNote(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRsNote[] rsNote) {
        this.rsNote = rsNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series_title_number")
    public String seriesTitleNumber;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withSeriesTitleNumber(String seriesTitleNumber) {
        this.seriesTitleNumber = seriesTitleNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipping_cost")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCost shippingCost;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withShippingCost(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCost shippingCost) {
        this.shippingCost = shippingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specific_edition")
    public Boolean specificEdition;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withSpecificEdition(Boolean specificEdition) {
        this.specificEdition = specificEdition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_page")
    public String startPage;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withStartPage(String startPage) {
        this.startPage = startPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsStatus status;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withStatus(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplied_format")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsSuppliedFormat suppliedFormat;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withSuppliedFormat(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsSuppliedFormat suppliedFormat) {
        this.suppliedFormat = suppliedFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_email")
    public String textEmail;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withTextEmail(String textEmail) {
        this.textEmail = textEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_postal_1")
    public String textPostal1;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withTextPostal1(String textPostal1) {
        this.textPostal1 = textPostal1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_postal_2")
    public String textPostal2;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withTextPostal2(String textPostal2) {
        this.textPostal2 = textPostal2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_postal_3")
    public String textPostal3;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withTextPostal3(String textPostal3) {
        this.textPostal3 = textPostal3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_postal_4")
    public String textPostal4;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withTextPostal4(String textPostal4) {
        this.textPostal4 = textPostal4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_alternative_address")
    public Boolean useAlternativeAddress;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withUseAlternativeAddress(Boolean useAlternativeAddress) {
        this.useAlternativeAddress = useAlternativeAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_request")
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsUserRequest userRequest;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withUserRequest(Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsUserRequest userRequest) {
        this.userRequest = userRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public String volume;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withVolume(String volume) {
        this.volume = volume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("willing_to_pay")
    public Boolean willingToPay;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withWillingToPay(Boolean willingToPay) {
        this.willingToPay = willingToPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public String year;
    public Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems withYear(String year) {
        this.year = year;
        return this;
    }
}