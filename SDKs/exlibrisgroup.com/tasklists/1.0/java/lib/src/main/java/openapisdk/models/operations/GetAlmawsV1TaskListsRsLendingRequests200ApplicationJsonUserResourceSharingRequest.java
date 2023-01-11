package openapisdk.models.operations;

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
 * GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest
 * Resource sharing request Object.
**/
public class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additional_barcode")
    public String[] additionalBarcode;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withAdditionalBarcode(String[] additionalBarcode) {
        this.additionalBarcode = additionalBarcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additional_person_name")
    public String additionalPersonName;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withAdditionalPersonName(String additionalPersonName) {
        this.additionalPersonName = additionalPersonName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agree_to_copyright_terms")
    public Boolean agreeToCopyrightTerms;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withAgreeToCopyrightTerms(Boolean agreeToCopyrightTerms) {
        this.agreeToCopyrightTerms = agreeToCopyrightTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_other_formats")
    public Boolean allowOtherFormats;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withAllowOtherFormats(Boolean allowOtherFormats) {
        this.allowOtherFormats = allowOtherFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author_initials")
    public String authorInitials;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withAuthorInitials(String authorInitials) {
        this.authorInitials = authorInitials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcode")
    public String barcode;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withBarcode(String barcode) {
        this.barcode = barcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bib_note")
    public String bibNote;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withBibNote(String bibNote) {
        this.bibNote = bibNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_number")
    public String callNumber;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withCallNumber(String callNumber) {
        this.callNumber = callNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chapter")
    public String chapter;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withChapter(String chapter) {
        this.chapter = chapter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chapter_author")
    public String chapterAuthor;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withChapterAuthor(String chapterAuthor) {
        this.chapterAuthor = chapterAuthor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chapter_title")
    public String chapterTitle;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withChapterTitle(String chapterTitle) {
        this.chapterTitle = chapterTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("citation_type")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType citationType;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withCitationType(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType citationType) {
        this.citationType = citationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright_status")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus copyrightStatus;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withCopyrightStatus(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus copyrightStatus) {
        this.copyrightStatus = copyrightStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public LocalDate createdDate;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_time")
    public OffsetDateTime createdTime;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("edition")
    public String edition;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withEdition(String edition) {
        this.edition = edition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editor")
    public String editor;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withEditor(String editor) {
        this.editor = editor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_page")
    public String endPage;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withEndPage(String endPage) {
        this.endPage = endPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_id")
    public String externalId;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat format;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withFormat(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fund")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund fund;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withFund(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund fund) {
        this.fund = fund;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_active_notes")
    public Boolean hasActiveNotes;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withHasActiveNotes(Boolean hasActiveNotes) {
        this.hasActiveNotes = hasActiveNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbn")
    public String isbn;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withIsbn(String isbn) {
        this.isbn = isbn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issn")
    public String issn;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withIssn(String issn) {
        this.issn = issn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue")
    public String issue;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withIssue(String issue) {
        this.issue = issue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("journal_title")
    public String journalTitle;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withJournalTitle(String journalTitle) {
        this.journalTitle = journalTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_interest_date")
    public LocalDate lastInterestDate;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withLastInterestDate(LocalDate lastInterestDate) {
        this.lastInterestDate = lastInterestDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_modified_date")
    public LocalDate lastModifiedDate;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withLastModifiedDate(LocalDate lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_modified_time")
    public OffsetDateTime lastModifiedTime;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lcc_number")
    public String lccNumber;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withLccNumber(String lccNumber) {
        this.lccNumber = lccNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level_of_service")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService levelOfService;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withLevelOfService(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService levelOfService) {
        this.levelOfService = levelOfService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lost_damaged_fee")
    public openapisdk.models.shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost lostDamagedFee;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withLostDamagedFee(openapisdk.models.shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost lostDamagedFee) {
        this.lostDamagedFee = lostDamagedFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximum_fee")
    public Float maximumFee;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withMaximumFee(Float maximumFee) {
        this.maximumFee = maximumFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mms_id")
    public String mmsId;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withMmsId(String mmsId) {
        this.mmsId = mmsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("need_patron_info")
    public Boolean needPatronInfo;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withNeedPatronInfo(Boolean needPatronInfo) {
        this.needPatronInfo = needPatronInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oclc_number")
    public String oclcNumber;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withOclcNumber(String oclcNumber) {
        this.oclcNumber = oclcNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_standard_id")
    public String otherStandardId;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withOtherStandardId(String otherStandardId) {
        this.otherStandardId = otherStandardId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public String pages;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withPages(String pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("part")
    public String part;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withPart(String part) {
        this.part = part;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partner")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner partner;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withPartner(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner partner) {
        this.partner = partner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_location")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation pickupLocation;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withPickupLocation(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation pickupLocation) {
        this.pickupLocation = pickupLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_location_type")
    public String pickupLocationType;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withPickupLocationType(String pickupLocationType) {
        this.pickupLocationType = pickupLocationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("place_of_publication")
    public String placeOfPublication;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withPlaceOfPublication(String placeOfPublication) {
        this.placeOfPublication = placeOfPublication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmid")
    public String pmid;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withPmid(String pmid) {
        this.pmid = pmid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_send_method")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod preferredSendMethod;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withPreferredSendMethod(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod preferredSendMethod) {
        this.preferredSendMethod = preferredSendMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printed")
    public Boolean printed;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withPrinted(Boolean printed) {
        this.printed = printed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reading_room")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom readingRoom;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withReadingRoom(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom readingRoom) {
        this.readingRoom = readingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receive_cost")
    public openapisdk.models.shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost receiveCost;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withReceiveCost(openapisdk.models.shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost receiveCost) {
        this.receiveCost = receiveCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_record_id")
    public String remoteRecordId;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withRemoteRecordId(String remoteRecordId) {
        this.remoteRecordId = remoteRecordId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reported")
    public Boolean reported;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withReported(Boolean reported) {
        this.reported = reported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_cost")
    public openapisdk.models.shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost requestCost;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withRequestCost(openapisdk.models.shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost requestCost) {
        this.requestCost = requestCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_language")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage requestedLanguage;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withRequestedLanguage(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage requestedLanguage) {
        this.requestedLanguage = requestedLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_media")
    public String requestedMedia;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withRequestedMedia(String requestedMedia) {
        this.requestedMedia = requestedMedia;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requester")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester requester;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withRequester(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester requester) {
        this.requester = requester;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rs_note")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote[] rsNote;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withRsNote(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote[] rsNote) {
        this.rsNote = rsNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series_title_number")
    public String seriesTitleNumber;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withSeriesTitleNumber(String seriesTitleNumber) {
        this.seriesTitleNumber = seriesTitleNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipping_cost")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost shippingCost;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withShippingCost(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost shippingCost) {
        this.shippingCost = shippingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specific_edition")
    public Boolean specificEdition;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withSpecificEdition(Boolean specificEdition) {
        this.specificEdition = specificEdition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_page")
    public String startPage;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withStartPage(String startPage) {
        this.startPage = startPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus status;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withStatus(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplied_format")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat suppliedFormat;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withSuppliedFormat(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat suppliedFormat) {
        this.suppliedFormat = suppliedFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_email")
    public String textEmail;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withTextEmail(String textEmail) {
        this.textEmail = textEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_postal_1")
    public String textPostal1;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withTextPostal1(String textPostal1) {
        this.textPostal1 = textPostal1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_postal_2")
    public String textPostal2;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withTextPostal2(String textPostal2) {
        this.textPostal2 = textPostal2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_postal_3")
    public String textPostal3;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withTextPostal3(String textPostal3) {
        this.textPostal3 = textPostal3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_postal_4")
    public String textPostal4;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withTextPostal4(String textPostal4) {
        this.textPostal4 = textPostal4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_alternative_address")
    public Boolean useAlternativeAddress;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withUseAlternativeAddress(Boolean useAlternativeAddress) {
        this.useAlternativeAddress = useAlternativeAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_request")
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest userRequest;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withUserRequest(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest userRequest) {
        this.userRequest = userRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public String volume;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withVolume(String volume) {
        this.volume = volume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("willing_to_pay")
    public Boolean willingToPay;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withWillingToPay(Boolean willingToPay) {
        this.willingToPay = willingToPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public String year;
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest withYear(String year) {
        this.year = year;
        return this;
    }
}