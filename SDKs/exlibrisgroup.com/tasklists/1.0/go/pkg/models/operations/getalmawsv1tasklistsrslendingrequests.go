package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAlmawsV1TaskListsRsLendingRequestsQueryParams struct {
	Library         *string `queryParam:"style=form,explode=true,name=library"`
	Partner         *string `queryParam:"style=form,explode=true,name=partner"`
	Printed         *string `queryParam:"style=form,explode=true,name=printed"`
	Reported        *string `queryParam:"style=form,explode=true,name=reported"`
	RequestedFormat *string `queryParam:"style=form,explode=true,name=requested_format"`
	Status          *string `queryParam:"style=form,explode=true,name=status"`
	SuppliedFormat  *string `queryParam:"style=form,explode=true,name=supplied_format"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCitationType
// Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCitationType struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCopyrightStatus
// The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCopyrightStatus struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFormat
// Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFormat struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFund
// The code of the fund. Not relevant for lending requests.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFund struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestLevelOfService
// The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestLevelOfService struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPartner
// The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPartner struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPickupLocation
// The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPickupLocation struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPreferredSendMethod
// Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPreferredSendMethod struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestReadingRoom
// The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestReadingRoom struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequestedLanguage
// The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequestedLanguage struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequester
// The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequester struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote
// Specific related note.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote struct {
	Content     *string    `json:"content,omitempty"`
	CreatedBy   *string    `json:"created_by,omitempty"`
	CreatedDate *time.Time `json:"created_date,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCostCurrency
// The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCostCurrency struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCost struct {
	Currency GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCostCurrency `json:"currency"`
	Sum      float64                                                                                               `json:"sum"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestStatus
// The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestStatus struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestSuppliedFormat
// Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestSuppliedFormat struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestUserRequest
// The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestUserRequest struct {
	Link  *string `json:"link,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest
// Resource sharing request Object.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest struct {
	AdditionalBarcode     []string                                                                                                                                                     `json:"additional_barcode,omitempty"`
	AdditionalPersonName  *string                                                                                                                                                      `json:"additional_person_name,omitempty"`
	AgreeToCopyrightTerms *bool                                                                                                                                                        `json:"agree_to_copyright_terms,omitempty"`
	AllowOtherFormats     *bool                                                                                                                                                        `json:"allow_other_formats,omitempty"`
	Author                *string                                                                                                                                                      `json:"author,omitempty"`
	AuthorInitials        *string                                                                                                                                                      `json:"author_initials,omitempty"`
	Barcode               *string                                                                                                                                                      `json:"barcode,omitempty"`
	BibNote               *string                                                                                                                                                      `json:"bib_note,omitempty"`
	CallNumber            *string                                                                                                                                                      `json:"call_number,omitempty"`
	Chapter               *string                                                                                                                                                      `json:"chapter,omitempty"`
	ChapterAuthor         *string                                                                                                                                                      `json:"chapter_author,omitempty"`
	ChapterTitle          *string                                                                                                                                                      `json:"chapter_title,omitempty"`
	CitationType          *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCitationType                                                               `json:"citation_type,omitempty"`
	CopyrightStatus       *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCopyrightStatus                                                            `json:"copyright_status,omitempty"`
	CreatedDate           *time.Time                                                                                                                                                   `json:"created_date,omitempty"`
	CreatedTime           *time.Time                                                                                                                                                   `json:"created_time,omitempty"`
	Doi                   *string                                                                                                                                                      `json:"doi,omitempty"`
	Edition               *string                                                                                                                                                      `json:"edition,omitempty"`
	Editor                *string                                                                                                                                                      `json:"editor,omitempty"`
	EndPage               *string                                                                                                                                                      `json:"end_page,omitempty"`
	ExternalID            *string                                                                                                                                                      `json:"external_id,omitempty"`
	Format                *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFormat                                                                     `json:"format,omitempty"`
	Fund                  *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFund                                                                       `json:"fund,omitempty"`
	HasActiveNotes        *bool                                                                                                                                                        `json:"has_active_notes,omitempty"`
	Isbn                  *string                                                                                                                                                      `json:"isbn,omitempty"`
	Issn                  *string                                                                                                                                                      `json:"issn,omitempty"`
	Issue                 *string                                                                                                                                                      `json:"issue,omitempty"`
	JournalTitle          *string                                                                                                                                                      `json:"journal_title,omitempty"`
	LastInterestDate      *time.Time                                                                                                                                                   `json:"last_interest_date,omitempty"`
	LastModifiedDate      *time.Time                                                                                                                                                   `json:"last_modified_date,omitempty"`
	LastModifiedTime      *time.Time                                                                                                                                                   `json:"last_modified_time,omitempty"`
	LccNumber             *string                                                                                                                                                      `json:"lcc_number,omitempty"`
	LevelOfService        *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestLevelOfService                                                             `json:"level_of_service,omitempty"`
	LostDamagedFee        *shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost `json:"lost_damaged_fee,omitempty"`
	MaximumFee            *float32                                                                                                                                                     `json:"maximum_fee,omitempty"`
	MmsID                 *string                                                                                                                                                      `json:"mms_id,omitempty"`
	NeedPatronInfo        *bool                                                                                                                                                        `json:"need_patron_info,omitempty"`
	Note                  *string                                                                                                                                                      `json:"note,omitempty"`
	OclcNumber            *string                                                                                                                                                      `json:"oclc_number,omitempty"`
	OtherStandardID       *string                                                                                                                                                      `json:"other_standard_id,omitempty"`
	Owner                 *string                                                                                                                                                      `json:"owner,omitempty"`
	Pages                 *string                                                                                                                                                      `json:"pages,omitempty"`
	Part                  *string                                                                                                                                                      `json:"part,omitempty"`
	Partner               *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPartner                                                                    `json:"partner,omitempty"`
	PickupLocation        *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPickupLocation                                                             `json:"pickup_location,omitempty"`
	PickupLocationType    *string                                                                                                                                                      `json:"pickup_location_type,omitempty"`
	PlaceOfPublication    *string                                                                                                                                                      `json:"place_of_publication,omitempty"`
	Pmid                  *string                                                                                                                                                      `json:"pmid,omitempty"`
	PreferredSendMethod   *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPreferredSendMethod                                                        `json:"preferred_send_method,omitempty"`
	Printed               *bool                                                                                                                                                        `json:"printed,omitempty"`
	Publisher             *string                                                                                                                                                      `json:"publisher,omitempty"`
	ReadingRoom           *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestReadingRoom                                                                `json:"reading_room,omitempty"`
	ReceiveCost           *shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost `json:"receive_cost,omitempty"`
	RemoteRecordID        *string                                                                                                                                                      `json:"remote_record_id,omitempty"`
	Reported              *bool                                                                                                                                                        `json:"reported,omitempty"`
	RequestCost           *shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost `json:"request_cost,omitempty"`
	RequestID             *string                                                                                                                                                      `json:"request_id,omitempty"`
	RequestedLanguage     *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequestedLanguage                                                          `json:"requested_language,omitempty"`
	RequestedMedia        *string                                                                                                                                                      `json:"requested_media,omitempty"`
	Requester             *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequester                                                                  `json:"requester,omitempty"`
	RsNote                []GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote                                                                    `json:"rs_note,omitempty"`
	SeriesTitleNumber     *string                                                                                                                                                      `json:"series_title_number,omitempty"`
	ShippingCost          *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCost                                                               `json:"shipping_cost,omitempty"`
	Source                *string                                                                                                                                                      `json:"source,omitempty"`
	SpecificEdition       *bool                                                                                                                                                        `json:"specific_edition,omitempty"`
	StartPage             *string                                                                                                                                                      `json:"start_page,omitempty"`
	Status                *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestStatus                                                                     `json:"status,omitempty"`
	SuppliedFormat        *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestSuppliedFormat                                                             `json:"supplied_format,omitempty"`
	TextEmail             *string                                                                                                                                                      `json:"text_email,omitempty"`
	TextPostal1           *string                                                                                                                                                      `json:"text_postal_1,omitempty"`
	TextPostal2           *string                                                                                                                                                      `json:"text_postal_2,omitempty"`
	TextPostal3           *string                                                                                                                                                      `json:"text_postal_3,omitempty"`
	TextPostal4           *string                                                                                                                                                      `json:"text_postal_4,omitempty"`
	Title                 *string                                                                                                                                                      `json:"title,omitempty"`
	UseAlternativeAddress *bool                                                                                                                                                        `json:"use_alternative_address,omitempty"`
	UserRequest           *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestUserRequest                                                                `json:"user_request,omitempty"`
	Volume                *string                                                                                                                                                      `json:"volume,omitempty"`
	WillingToPay          *bool                                                                                                                                                        `json:"willing_to_pay,omitempty"`
	Year                  *string                                                                                                                                                      `json:"year,omitempty"`
}

// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSON
// A list of resource sharing requests.
type GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSON struct {
	TotalRecordCount           *int64                                                                              `json:"total_record_count,omitempty"`
	UserResourceSharingRequest []GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest `json:"user_resource_sharing_request,omitempty"`
}

type GetAlmawsV1TaskListsRsLendingRequestsRequest struct {
	QueryParams GetAlmawsV1TaskListsRsLendingRequestsQueryParams
}

type GetAlmawsV1TaskListsRsLendingRequestsResponse struct {
	Body                                                          []byte
	ContentType                                                   string
	Headers                                                       map[string][]string
	StatusCode                                                    int64
	GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject *GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSON
}
