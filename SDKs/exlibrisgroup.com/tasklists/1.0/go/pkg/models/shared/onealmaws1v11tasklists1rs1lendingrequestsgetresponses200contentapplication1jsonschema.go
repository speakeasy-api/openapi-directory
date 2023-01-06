package shared

import (
	"time"
)

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType
// Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus
// The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFormat
// Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFormat struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFund
// The code of the fund. Not relevant for lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFund struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestLevelOfService
// The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestLevelOfService struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPartner
// The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPartner struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPickupLocation
// The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPickupLocation struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPreferredSendMethod
// Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPreferredSendMethod struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestReadingRoom
// The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestReadingRoom struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequestedLanguage
// The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequestedLanguage struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequester
// The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequester struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote
// Specific related note.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote struct {
	Content     *string
	CreatedBy   *string
	CreatedDate *time.Time
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCostCurrency
// The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCostCurrency struct {
	Desc  *string
	Value *string
}

type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCost struct {
	Currency Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCostCurrency
	Sum      float64
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestStatus
// The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestStatus struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestSuppliedFormat
// Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestSuppliedFormat struct {
	Desc  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestUserRequest
// The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestUserRequest struct {
	Link  *string
	Value *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest
// Resource sharing request Object.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest struct {
	AdditionalBarcode     []string
	AdditionalPersonName  *string
	AgreeToCopyrightTerms *bool
	AllowOtherFormats     *bool
	Author                *string
	AuthorInitials        *string
	Barcode               *string
	BibNote               *string
	CallNumber            *string
	Chapter               *string
	ChapterAuthor         *string
	ChapterTitle          *string
	CitationType          *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType
	CopyrightStatus       *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus
	CreatedDate           *time.Time
	CreatedTime           *time.Time
	Doi                   *string
	Edition               *string
	Editor                *string
	EndPage               *string
	ExternalID            *string
	Format                *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFormat
	Fund                  *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFund
	HasActiveNotes        *bool
	Isbn                  *string
	Issn                  *string
	Issue                 *string
	JournalTitle          *string
	LastInterestDate      *time.Time
	LastModifiedDate      *time.Time
	LastModifiedTime      *time.Time
	LccNumber             *string
	LevelOfService        *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestLevelOfService
	LostDamagedFee        *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost
	MaximumFee            *float32
	MmsID                 *string
	NeedPatronInfo        *bool
	Note                  *string
	OclcNumber            *string
	OtherStandardID       *string
	Owner                 *string
	Pages                 *string
	Part                  *string
	Partner               *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPartner
	PickupLocation        *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPickupLocation
	PickupLocationType    *string
	PlaceOfPublication    *string
	Pmid                  *string
	PreferredSendMethod   *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPreferredSendMethod
	Printed               *bool
	Publisher             *string
	ReadingRoom           *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestReadingRoom
	ReceiveCost           *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost
	RemoteRecordID        *string
	Reported              *bool
	RequestCost           *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost
	RequestID             *string
	RequestedLanguage     *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequestedLanguage
	RequestedMedia        *string
	Requester             *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequester
	RsNote                []Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote
	SeriesTitleNumber     *string
	ShippingCost          *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCost
	Source                *string
	SpecificEdition       *bool
	StartPage             *string
	Status                *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestStatus
	SuppliedFormat        *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestSuppliedFormat
	TextEmail             *string
	TextPostal1           *string
	TextPostal2           *string
	TextPostal3           *string
	TextPostal4           *string
	Title                 *string
	UseAlternativeAddress *bool
	UserRequest           *Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestUserRequest
	Volume                *string
	WillingToPay          *bool
	Year                  *string
}

// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchema
// A list of resource sharing requests.
type Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchema struct {
	TotalRecordCount           *int64
	UserResourceSharingRequest []Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest
}
