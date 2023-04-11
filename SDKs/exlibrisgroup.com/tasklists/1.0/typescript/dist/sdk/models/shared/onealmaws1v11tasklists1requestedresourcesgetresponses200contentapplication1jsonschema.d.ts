import { SpeakeasyBase } from "../../../internal/utils";
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopyBaseStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Specific copy of resource in a specific location.
 */
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy extends SpeakeasyBase {
    /**
     * Alternative call number.
     */
    alternativeCallNumber?: string;
    /**
     * The item's barcode.
     */
    barcode?: string;
    baseStatus?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopyBaseStatus;
    link?: string;
    /**
     * The resource's pid.
     */
    pid?: string;
    /**
     * The item's storage location id.
     */
    storageLocationId?: string;
}
/**
 * Holding pid, a unique holding id that the resource is associated with.
 */
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingId extends SpeakeasyBase {
    link?: string;
    value?: string;
}
/**
 * Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
 */
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Location of the requested resource.
 */
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation extends SpeakeasyBase {
    /**
     * Call number of the item.
     */
    callNumber?: string;
    /**
     * Copies of resource in a specific location.
     */
    copy?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy[];
    /**
     * Holding pid, a unique holding id that the resource is associated with.
     */
    holdingId?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingId;
    /**
     * Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
     */
    library?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary;
    /**
     * The location.
     */
    shelvingLocation?: string;
}
/**
 * The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
 */
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The sub type of the request.
 */
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
 */
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Request object.
 */
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest extends SpeakeasyBase {
    /**
     * The related note of the request.
     */
    comment?: string;
    /**
     * The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
     */
    destination?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination;
    /**
     * The identifier of the request in Alma.
     */
    id?: string;
    link?: string;
    /**
     * Indication whether the request is printed.
     */
    printed?: boolean;
    /**
     * Indication whether the request is reported.
     */
    reported?: boolean;
    /**
     * Deprecated - use request_time instead. The request date.
     */
    requestDate?: Date;
    /**
     * The sub type of the request.
     */
    requestSubType?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType;
    /**
     * The creation date and exact time of the request. Output parameter.
     */
    requestTime?: Date;
    requestType: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum;
    /**
     * A description of the requester.
     */
    requester?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester;
}
/**
 * The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
 */
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsId extends SpeakeasyBase {
    link?: string;
    value?: string;
}
/**
 * Metadata about the requested resource.
 */
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata extends SpeakeasyBase {
    /**
     * An entity primarily responsible for making the resource.
     */
    author?: string;
    /**
     * ISBN
     */
    isbn?: string;
    /**
     * ISSN
     */
    issn?: string;
    /**
     * The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
     */
    mmsId?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsId;
    /**
     * Place of publication.
     */
    publicationPlace?: string;
    /**
     * The year associated with the publication of the resource.
     */
    publicationYear?: string;
    /**
     * An entity responsible for making the resource available.
     */
    publisher?: string;
    /**
     * The resource title.
     */
    title?: string;
}
/**
 * Requested resource to be picked from the shelf.
 */
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource extends SpeakeasyBase {
    /**
     * Location of the requested resource.
     */
    location?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation;
    /**
     * Requests for resource.
     */
    request?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest[];
    /**
     * Metadata about the requested resource.
     */
    resourceMetadata?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata;
}
/**
 * A list of requested resources.
 */
export declare class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
    /**
     * Requested resource object.
     */
    requestedResource?: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource[];
    /**
     * The total number of requested resources.
     */
    totalRecordCount?: number;
}
