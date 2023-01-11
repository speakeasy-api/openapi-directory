import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAlmawsV1TaskListsRequestedResourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=circ_desk" })
  circDesk: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=library" })
  library: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pickup_inst" })
  pickupInst?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=printed" })
  printed?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reported" })
  reported?: string;
}


export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy
/** 
 * Specific copy of resource in a specific location.
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternative_call_number" })
  alternativeCallNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "json, name=base_status" })
  baseStatus?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=pid" })
  pid?: string;

  @SpeakeasyMetadata({ data: "json, name=storage_location_id" })
  storageLocationId?: string;
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId
/** 
 * Holding pid, a unique holding id that the resource is associated with.
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary
/** 
 * Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation
/** 
 * Location of the requested resource.
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_number" })
  callNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=copy", elemType: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy })
  copy?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy[];

  @SpeakeasyMetadata({ data: "json, name=holding_id" })
  holdingId?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId;

  @SpeakeasyMetadata({ data: "json, name=library" })
  library?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary;

  @SpeakeasyMetadata({ data: "json, name=shelving_location" })
  shelvingLocation?: string;
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination
/** 
 * The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType
/** 
 * The sub type of the request.
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

export enum GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum {
    Booking = "BOOKING",
    Digitization = "DIGITIZATION",
    Hold = "HOLD",
    Move = "MOVE",
    WorkOrder = "WORK_ORDER"
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester
/** 
 * A description of the requester.
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest
/** 
 * Request object.
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=printed" })
  printed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reported" })
  reported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=request_date" })
  requestDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=request_sub_type" })
  requestSubType?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType;

  @SpeakeasyMetadata({ data: "json, name=request_time" })
  requestTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=request_type" })
  requestType: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester;
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId
/** 
 * The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata
/** 
 * Metadata about the requested resource.
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=isbn" })
  isbn?: string;

  @SpeakeasyMetadata({ data: "json, name=issn" })
  issn?: string;

  @SpeakeasyMetadata({ data: "json, name=mms_id" })
  mmsId?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId;

  @SpeakeasyMetadata({ data: "json, name=publication_place" })
  publicationPlace?: string;

  @SpeakeasyMetadata({ data: "json, name=publication_year" })
  publicationYear?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource
/** 
 * Requested resource to be picked from the shelf.
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=request", elemType: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest })
  request?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest[];

  @SpeakeasyMetadata({ data: "json, name=resource_metadata" })
  resourceMetadata?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata;
}


// GetAlmawsV1TaskListsRequestedResources200ApplicationJson
/** 
 * A list of requested resources.
**/
export class GetAlmawsV1TaskListsRequestedResources200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requested_resource", elemType: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource })
  requestedResource?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource[];

  @SpeakeasyMetadata({ data: "json, name=total_record_count" })
  totalRecordCount?: number;
}


export class GetAlmawsV1TaskListsRequestedResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAlmawsV1TaskListsRequestedResourcesQueryParams;
}


export class GetAlmawsV1TaskListsRequestedResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAlmawsV1TaskListsRequestedResources200ApplicationJSONObject?: GetAlmawsV1TaskListsRequestedResources200ApplicationJson;
}
