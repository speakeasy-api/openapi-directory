import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopyBaseStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy
/** 
 * Specific copy of resource in a specific location.
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternative_call_number" })
  alternativeCallNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "json, name=base_status" })
  baseStatus?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopyBaseStatus;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=pid" })
  pid?: string;

  @SpeakeasyMetadata({ data: "json, name=storage_location_id" })
  storageLocationId?: string;
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingId
/** 
 * Holding pid, a unique holding id that the resource is associated with.
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary
/** 
 * Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation
/** 
 * Location of the requested resource.
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_number" })
  callNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=copy", elemType: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy })
  copy?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy[];

  @SpeakeasyMetadata({ data: "json, name=holding_id" })
  holdingId?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingId;

  @SpeakeasyMetadata({ data: "json, name=library" })
  library?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary;

  @SpeakeasyMetadata({ data: "json, name=shelving_location" })
  shelvingLocation?: string;
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination
/** 
 * The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType
/** 
 * The sub type of the request.
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

export enum Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum {
    Booking = "BOOKING",
    Digitization = "DIGITIZATION",
    Hold = "HOLD",
    Move = "MOVE",
    WorkOrder = "WORK_ORDER"
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester
/** 
 * A description of the requester.
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest
/** 
 * Request object.
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination;

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
  requestSubType?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType;

  @SpeakeasyMetadata({ data: "json, name=request_time" })
  requestTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=request_type" })
  requestType: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester;
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsId
/** 
 * The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata
/** 
 * Metadata about the requested resource.
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=isbn" })
  isbn?: string;

  @SpeakeasyMetadata({ data: "json, name=issn" })
  issn?: string;

  @SpeakeasyMetadata({ data: "json, name=mms_id" })
  mmsId?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsId;

  @SpeakeasyMetadata({ data: "json, name=publication_place" })
  publicationPlace?: string;

  @SpeakeasyMetadata({ data: "json, name=publication_year" })
  publicationYear?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource
/** 
 * Requested resource to be picked from the shelf.
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=request", elemType: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest })
  request?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest[];

  @SpeakeasyMetadata({ data: "json, name=resource_metadata" })
  resourceMetadata?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata;
}


// Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema
/** 
 * A list of requested resources.
**/
export class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requested_resource", elemType: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource })
  requestedResource?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource[];

  @SpeakeasyMetadata({ data: "json, name=total_record_count" })
  totalRecordCount?: number;
}
