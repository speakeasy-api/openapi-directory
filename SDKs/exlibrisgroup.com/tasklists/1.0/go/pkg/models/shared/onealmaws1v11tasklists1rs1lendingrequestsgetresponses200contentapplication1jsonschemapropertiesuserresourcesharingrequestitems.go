package shared

import (
	"time"
)

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCitationType
// Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCitationType struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCopyrightStatus
// The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCopyrightStatus struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFormat
// Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFormat struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFund
// The code of the fund. Not relevant for lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFund struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsLevelOfService
// The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsLevelOfService struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPartner
// The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPartner struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPickupLocation
// The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPickupLocation struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPreferredSendMethod
// Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPreferredSendMethod struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsReadingRoom
// The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsReadingRoom struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequestedLanguage
// The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequestedLanguage struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequester
// The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequester struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRsNote
// Specific related note.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRsNote struct {
	Content     *string    `json:"content,omitempty"`
	CreatedBy   *string    `json:"created_by,omitempty"`
	CreatedDate *time.Time `json:"created_date,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCostCurrency
// The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCostCurrency struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCost struct {
	Currency Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCostCurrency `json:"currency"`
	Sum      float64                                                                                                                                            `json:"sum"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsStatus
// The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsStatus struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsSuppliedFormat
// Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsSuppliedFormat struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsUserRequest
// The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsUserRequest struct {
	Link  *string `json:"link,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems
// Resource sharing request Object.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems struct {
	AdditionalBarcode     []string                                                                                                                                              `json:"additional_barcode,omitempty"`
	AdditionalPersonName  *string                                                                                                                                               `json:"additional_person_name,omitempty"`
	AgreeToCopyrightTerms *bool                                                                                                                                                 `json:"agree_to_copyright_terms,omitempty"`
	AllowOtherFormats     *bool                                                                                                                                                 `json:"allow_other_formats,omitempty"`
	Author                *string                                                                                                                                               `json:"author,omitempty"`
	AuthorInitials        *string                                                                                                                                               `json:"author_initials,omitempty"`
	Barcode               *string                                                                                                                                               `json:"barcode,omitempty"`
	BibNote               *string                                                                                                                                               `json:"bib_note,omitempty"`
	CallNumber            *string                                                                                                                                               `json:"call_number,omitempty"`
	Chapter               *string                                                                                                                                               `json:"chapter,omitempty"`
	ChapterAuthor         *string                                                                                                                                               `json:"chapter_author,omitempty"`
	ChapterTitle          *string                                                                                                                                               `json:"chapter_title,omitempty"`
	CitationType          *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCitationType           `json:"citation_type,omitempty"`
	CopyrightStatus       *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCopyrightStatus        `json:"copyright_status,omitempty"`
	CreatedDate           *time.Time                                                                                                                                            `json:"created_date,omitempty"`
	CreatedTime           *time.Time                                                                                                                                            `json:"created_time,omitempty"`
	Doi                   *string                                                                                                                                               `json:"doi,omitempty"`
	Edition               *string                                                                                                                                               `json:"edition,omitempty"`
	Editor                *string                                                                                                                                               `json:"editor,omitempty"`
	EndPage               *string                                                                                                                                               `json:"end_page,omitempty"`
	ExternalID            *string                                                                                                                                               `json:"external_id,omitempty"`
	Format                *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFormat                 `json:"format,omitempty"`
	Fund                  *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFund                   `json:"fund,omitempty"`
	HasActiveNotes        *bool                                                                                                                                                 `json:"has_active_notes,omitempty"`
	Isbn                  *string                                                                                                                                               `json:"isbn,omitempty"`
	Issn                  *string                                                                                                                                               `json:"issn,omitempty"`
	Issue                 *string                                                                                                                                               `json:"issue,omitempty"`
	JournalTitle          *string                                                                                                                                               `json:"journal_title,omitempty"`
	LastInterestDate      *time.Time                                                                                                                                            `json:"last_interest_date,omitempty"`
	LastModifiedDate      *time.Time                                                                                                                                            `json:"last_modified_date,omitempty"`
	LastModifiedTime      *time.Time                                                                                                                                            `json:"last_modified_time,omitempty"`
	LccNumber             *string                                                                                                                                               `json:"lcc_number,omitempty"`
	LevelOfService        *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsLevelOfService         `json:"level_of_service,omitempty"`
	LostDamagedFee        *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost `json:"lost_damaged_fee,omitempty"`
	MaximumFee            *float32                                                                                                                                              `json:"maximum_fee,omitempty"`
	MmsID                 *string                                                                                                                                               `json:"mms_id,omitempty"`
	NeedPatronInfo        *bool                                                                                                                                                 `json:"need_patron_info,omitempty"`
	Note                  *string                                                                                                                                               `json:"note,omitempty"`
	OclcNumber            *string                                                                                                                                               `json:"oclc_number,omitempty"`
	OtherStandardID       *string                                                                                                                                               `json:"other_standard_id,omitempty"`
	Owner                 *string                                                                                                                                               `json:"owner,omitempty"`
	Pages                 *string                                                                                                                                               `json:"pages,omitempty"`
	Part                  *string                                                                                                                                               `json:"part,omitempty"`
	Partner               *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPartner                `json:"partner,omitempty"`
	PickupLocation        *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPickupLocation         `json:"pickup_location,omitempty"`
	PickupLocationType    *string                                                                                                                                               `json:"pickup_location_type,omitempty"`
	PlaceOfPublication    *string                                                                                                                                               `json:"place_of_publication,omitempty"`
	Pmid                  *string                                                                                                                                               `json:"pmid,omitempty"`
	PreferredSendMethod   *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPreferredSendMethod    `json:"preferred_send_method,omitempty"`
	Printed               *bool                                                                                                                                                 `json:"printed,omitempty"`
	Publisher             *string                                                                                                                                               `json:"publisher,omitempty"`
	ReadingRoom           *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsReadingRoom            `json:"reading_room,omitempty"`
	ReceiveCost           *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost `json:"receive_cost,omitempty"`
	RemoteRecordID        *string                                                                                                                                               `json:"remote_record_id,omitempty"`
	Reported              *bool                                                                                                                                                 `json:"reported,omitempty"`
	RequestCost           *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost `json:"request_cost,omitempty"`
	RequestID             *string                                                                                                                                               `json:"request_id,omitempty"`
	RequestedLanguage     *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequestedLanguage      `json:"requested_language,omitempty"`
	RequestedMedia        *string                                                                                                                                               `json:"requested_media,omitempty"`
	Requester             *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequester              `json:"requester,omitempty"`
	RsNote                []Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRsNote                `json:"rs_note,omitempty"`
	SeriesTitleNumber     *string                                                                                                                                               `json:"series_title_number,omitempty"`
	ShippingCost          *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCost           `json:"shipping_cost,omitempty"`
	Source                *string                                                                                                                                               `json:"source,omitempty"`
	SpecificEdition       *bool                                                                                                                                                 `json:"specific_edition,omitempty"`
	StartPage             *string                                                                                                                                               `json:"start_page,omitempty"`
	Status                *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsStatus                 `json:"status,omitempty"`
	SuppliedFormat        *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsSuppliedFormat         `json:"supplied_format,omitempty"`
	TextEmail             *string                                                                                                                                               `json:"text_email,omitempty"`
	TextPostal1           *string                                                                                                                                               `json:"text_postal_1,omitempty"`
	TextPostal2           *string                                                                                                                                               `json:"text_postal_2,omitempty"`
	TextPostal3           *string                                                                                                                                               `json:"text_postal_3,omitempty"`
	TextPostal4           *string                                                                                                                                               `json:"text_postal_4,omitempty"`
	Title                 *string                                                                                                                                               `json:"title,omitempty"`
	UseAlternativeAddress *bool                                                                                                                                                 `json:"use_alternative_address,omitempty"`
	UserRequest           *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsUserRequest            `json:"user_request,omitempty"`
	Volume                *string                                                                                                                                               `json:"volume,omitempty"`
	WillingToPay          *bool                                                                                                                                                 `json:"willing_to_pay,omitempty"`
	Year                  *string                                                                                                                                               `json:"year,omitempty"`
}
