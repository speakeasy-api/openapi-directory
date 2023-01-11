import { SpeakeasyBase } from "../../../internal/utils";
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopyBaseStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Specific copy of resource in a specific location.
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy extends SpeakeasyBase {
    alternativeCallNumber?: string;
    barcode?: string;
    baseStatus?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopyBaseStatus;
    link?: string;
    pid?: string;
    storageLocationId?: string;
}
/**
 * Holding pid, a unique holding id that the resource is associated with.
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingId extends SpeakeasyBase {
    link?: string;
    value?: string;
}
/**
 * Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Location of the requested resource.
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation extends SpeakeasyBase {
    callNumber?: string;
    copy?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy[];
    holdingId?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingId;
    library?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary;
    shelvingLocation?: string;
}
/**
 * The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The sub type of the request.
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
export declare enum Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum {
    Booking = "BOOKING",
    Digitization = "DIGITIZATION",
    Hold = "HOLD",
    Move = "MOVE",
    WorkOrder = "WORK_ORDER"
}
/**
 * A description of the requester.
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Request object.
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest extends SpeakeasyBase {
    comment?: string;
    destination?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination;
    id?: string;
    link?: string;
    printed?: boolean;
    reported?: boolean;
    requestDate?: Date;
    requestSubType?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType;
    requestTime?: Date;
    requestType: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum;
    requester?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester;
}
/**
 * The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsId extends SpeakeasyBase {
    link?: string;
    value?: string;
}
/**
 * Metadata about the requested resource.
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata extends SpeakeasyBase {
    author?: string;
    isbn?: string;
    issn?: string;
    mmsId?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsId;
    publicationPlace?: string;
    publicationYear?: string;
    publisher?: string;
    title?: string;
}
/**
 * Requested resource to be picked from the shelf.
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource extends SpeakeasyBase {
    location?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation;
    request?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest[];
    resourceMetadata?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata;
}
/**
 * A list of requested resources.
**/
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
    requestedResource?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource[];
    totalRecordCount?: number;
}
