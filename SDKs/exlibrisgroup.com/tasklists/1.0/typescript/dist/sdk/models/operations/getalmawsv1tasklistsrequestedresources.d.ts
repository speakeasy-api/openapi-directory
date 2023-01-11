import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAlmawsV1TaskListsRequestedResourcesQueryParams extends SpeakeasyBase {
    circDesk: string;
    direction?: string;
    library: string;
    limit?: number;
    location?: string;
    offset?: number;
    orderBy?: string;
    pickupInst?: string;
    printed?: string;
    reported?: string;
}
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Specific copy of resource in a specific location.
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy extends SpeakeasyBase {
    alternativeCallNumber?: string;
    barcode?: string;
    baseStatus?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus;
    link?: string;
    pid?: string;
    storageLocationId?: string;
}
/**
 * Holding pid, a unique holding id that the resource is associated with.
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId extends SpeakeasyBase {
    link?: string;
    value?: string;
}
/**
 * Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Location of the requested resource.
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation extends SpeakeasyBase {
    callNumber?: string;
    copy?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy[];
    holdingId?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId;
    library?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary;
    shelvingLocation?: string;
}
/**
 * The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The sub type of the request.
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
export declare enum GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum {
    Booking = "BOOKING",
    Digitization = "DIGITIZATION",
    Hold = "HOLD",
    Move = "MOVE",
    WorkOrder = "WORK_ORDER"
}
/**
 * A description of the requester.
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Request object.
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest extends SpeakeasyBase {
    comment?: string;
    destination?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination;
    id?: string;
    link?: string;
    printed?: boolean;
    reported?: boolean;
    requestDate?: Date;
    requestSubType?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType;
    requestTime?: Date;
    requestType: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum;
    requester?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester;
}
/**
 * The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId extends SpeakeasyBase {
    link?: string;
    value?: string;
}
/**
 * Metadata about the requested resource.
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata extends SpeakeasyBase {
    author?: string;
    isbn?: string;
    issn?: string;
    mmsId?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId;
    publicationPlace?: string;
    publicationYear?: string;
    publisher?: string;
    title?: string;
}
/**
 * Requested resource to be picked from the shelf.
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource extends SpeakeasyBase {
    location?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation;
    request?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest[];
    resourceMetadata?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata;
}
/**
 * A list of requested resources.
**/
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJson extends SpeakeasyBase {
    requestedResource?: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource[];
    totalRecordCount?: number;
}
export declare class GetAlmawsV1TaskListsRequestedResourcesRequest extends SpeakeasyBase {
    queryParams: GetAlmawsV1TaskListsRequestedResourcesQueryParams;
}
export declare class GetAlmawsV1TaskListsRequestedResourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getAlmawsV1TaskListsRequestedResources200ApplicationJSONObject?: GetAlmawsV1TaskListsRequestedResources200ApplicationJson;
}
