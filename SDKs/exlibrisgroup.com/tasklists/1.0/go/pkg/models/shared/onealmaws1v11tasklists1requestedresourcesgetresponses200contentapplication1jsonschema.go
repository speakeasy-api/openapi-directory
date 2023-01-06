package shared

import (
	"time"
)

type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopyBaseStatus struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy
// Specific copy of resource in a specific location.
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy struct {
	AlternativeCallNumber *string                                                                                                                       `json:"alternative_call_number,omitempty"`
	Barcode               *string                                                                                                                       `json:"barcode,omitempty"`
	BaseStatus            *Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopyBaseStatus `json:"base_status,omitempty"`
	Link                  *string                                                                                                                       `json:"link,omitempty"`
	Pid                   *string                                                                                                                       `json:"pid,omitempty"`
	StorageLocationID     *string                                                                                                                       `json:"storage_location_id,omitempty"`
}

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingID
// Holding pid, a unique holding id that the resource is associated with.
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingID struct {
	Link  *string `json:"link,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary
// Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation
// Location of the requested resource.
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation struct {
	CallNumber       *string                                                                                                                  `json:"call_number,omitempty"`
	Copy             []Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy     `json:"copy,omitempty"`
	HoldingID        *Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingID `json:"holding_id,omitempty"`
	Library          *Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary   `json:"library,omitempty"`
	ShelvingLocation *string                                                                                                                  `json:"shelving_location,omitempty"`
}

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination
// The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType
// The sub type of the request.
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum string

const (
	Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnumBooking      Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum = "BOOKING"
	Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnumDigitization Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum = "DIGITIZATION"
	Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnumHold         Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum = "HOLD"
	Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnumMove         Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum = "MOVE"
	Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnumWorkOrder    Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum = "WORK_ORDER"
)

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester
// A description of the requester.
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest
// Request object.
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest struct {
	Comment        *string                                                                                                                      `json:"comment,omitempty"`
	Destination    *Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination    `json:"destination,omitempty"`
	ID             *string                                                                                                                      `json:"id,omitempty"`
	Link           *string                                                                                                                      `json:"link,omitempty"`
	Printed        *bool                                                                                                                        `json:"printed,omitempty"`
	Reported       *bool                                                                                                                        `json:"reported,omitempty"`
	RequestDate    *time.Time                                                                                                                   `json:"request_date,omitempty"`
	RequestSubType *Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType `json:"request_sub_type,omitempty"`
	RequestTime    *time.Time                                                                                                                   `json:"request_time,omitempty"`
	RequestType    Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum `json:"request_type"`
	Requester      *Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester      `json:"requester,omitempty"`
}

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsID
// The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsID struct {
	Link  *string `json:"link,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata
// Metadata about the requested resource.
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata struct {
	Author           *string                                                                                                                      `json:"author,omitempty"`
	Isbn             *string                                                                                                                      `json:"isbn,omitempty"`
	Issn             *string                                                                                                                      `json:"issn,omitempty"`
	MmsID            *Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsID `json:"mms_id,omitempty"`
	PublicationPlace *string                                                                                                                      `json:"publication_place,omitempty"`
	PublicationYear  *string                                                                                                                      `json:"publication_year,omitempty"`
	Publisher        *string                                                                                                                      `json:"publisher,omitempty"`
	Title            *string                                                                                                                      `json:"title,omitempty"`
}

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource
// Requested resource to be picked from the shelf.
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource struct {
	Location         *Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation         `json:"location,omitempty"`
	Request          []Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest         `json:"request,omitempty"`
	ResourceMetadata *Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata `json:"resource_metadata,omitempty"`
}

// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema
// A list of requested resources.
type Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema struct {
	RequestedResource []Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource `json:"requested_resource,omitempty"`
	TotalRecordCount  *int32                                                                                                   `json:"total_record_count,omitempty"`
}
