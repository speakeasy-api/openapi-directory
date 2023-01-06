package operations

import (
	"time"
)

type GetAlmawsV1TaskListsRequestedResourcesQueryParams struct {
	CircDesk   string  `queryParam:"style=form,explode=true,name=circ_desk"`
	Direction  *string `queryParam:"style=form,explode=true,name=direction"`
	Library    string  `queryParam:"style=form,explode=true,name=library"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	Location   *string `queryParam:"style=form,explode=true,name=location"`
	Offset     *int64  `queryParam:"style=form,explode=true,name=offset"`
	OrderBy    *string `queryParam:"style=form,explode=true,name=order_by"`
	PickupInst *string `queryParam:"style=form,explode=true,name=pickup_inst"`
	Printed    *string `queryParam:"style=form,explode=true,name=printed"`
	Reported   *string `queryParam:"style=form,explode=true,name=reported"`
}

type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopyBaseStatus struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopy
// Specific copy of resource in a specific location.
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopy struct {
	AlternativeCallNumber *string                                                                                          `json:"alternative_call_number,omitempty"`
	Barcode               *string                                                                                          `json:"barcode,omitempty"`
	BaseStatus            *GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopyBaseStatus `json:"base_status,omitempty"`
	Link                  *string                                                                                          `json:"link,omitempty"`
	Pid                   *string                                                                                          `json:"pid,omitempty"`
	StorageLocationID     *string                                                                                          `json:"storage_location_id,omitempty"`
}

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationHoldingID
// Holding pid, a unique holding id that the resource is associated with.
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationHoldingID struct {
	Link  *string `json:"link,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationLibrary
// Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationLibrary struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocation
// Location of the requested resource.
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocation struct {
	CallNumber       *string                                                                                     `json:"call_number,omitempty"`
	Copy             []GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopy     `json:"copy,omitempty"`
	HoldingID        *GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationHoldingID `json:"holding_id,omitempty"`
	Library          *GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationLibrary   `json:"library,omitempty"`
	ShelvingLocation *string                                                                                     `json:"shelving_location,omitempty"`
}

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestDestination
// The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestDestination struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestSubType
// The sub type of the request.
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestSubType struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnum string

const (
	GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnumBooking      GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnum = "BOOKING"
	GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnumDigitization GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnum = "DIGITIZATION"
	GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnumHold         GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnum = "HOLD"
	GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnumMove         GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnum = "MOVE"
	GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnumWorkOrder    GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnum = "WORK_ORDER"
)

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequester
// A description of the requester.
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequester struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequest
// Request object.
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequest struct {
	Comment        *string                                                                                         `json:"comment,omitempty"`
	Destination    *GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestDestination    `json:"destination,omitempty"`
	ID             *string                                                                                         `json:"id,omitempty"`
	Link           *string                                                                                         `json:"link,omitempty"`
	Printed        *bool                                                                                           `json:"printed,omitempty"`
	Reported       *bool                                                                                           `json:"reported,omitempty"`
	RequestDate    *time.Time                                                                                      `json:"request_date,omitempty"`
	RequestSubType *GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestSubType `json:"request_sub_type,omitempty"`
	RequestTime    *time.Time                                                                                      `json:"request_time,omitempty"`
	RequestType    GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnum `json:"request_type"`
	Requester      *GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequester      `json:"requester,omitempty"`
}

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadataMmsID
// The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadataMmsID struct {
	Link  *string `json:"link,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadata
// Metadata about the requested resource.
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadata struct {
	Author           *string                                                                                         `json:"author,omitempty"`
	Isbn             *string                                                                                         `json:"isbn,omitempty"`
	Issn             *string                                                                                         `json:"issn,omitempty"`
	MmsID            *GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadataMmsID `json:"mms_id,omitempty"`
	PublicationPlace *string                                                                                         `json:"publication_place,omitempty"`
	PublicationYear  *string                                                                                         `json:"publication_year,omitempty"`
	Publisher        *string                                                                                         `json:"publisher,omitempty"`
	Title            *string                                                                                         `json:"title,omitempty"`
}

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResource
// Requested resource to be picked from the shelf.
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResource struct {
	Location         *GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocation         `json:"location,omitempty"`
	Request          []GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequest         `json:"request,omitempty"`
	ResourceMetadata *GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadata `json:"resource_metadata,omitempty"`
}

// GetAlmawsV1TaskListsRequestedResources200ApplicationJSON
// A list of requested resources.
type GetAlmawsV1TaskListsRequestedResources200ApplicationJSON struct {
	RequestedResource []GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResource `json:"requested_resource,omitempty"`
	TotalRecordCount  *int32                                                                      `json:"total_record_count,omitempty"`
}

type GetAlmawsV1TaskListsRequestedResourcesRequest struct {
	QueryParams GetAlmawsV1TaskListsRequestedResourcesQueryParams
}

type GetAlmawsV1TaskListsRequestedResourcesResponse struct {
	Body                                                           []byte
	ContentType                                                    string
	Headers                                                        map[string][]string
	StatusCode                                                     int64
	GetAlmawsV1TaskListsRequestedResources200ApplicationJSONObject *GetAlmawsV1TaskListsRequestedResources200ApplicationJSON
}
