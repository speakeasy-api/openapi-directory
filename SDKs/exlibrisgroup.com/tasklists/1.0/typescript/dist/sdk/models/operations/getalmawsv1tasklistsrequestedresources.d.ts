import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAlmawsV1TaskListsRequestedResourcesRequest extends SpeakeasyBase {
    /**
     * The circulation desk where the action is being performed. Mandatory.
     */
    circDesk: string;
    /**
     * The order direction in which to retrieve the results. Optional.
     */
    direction?: string;
    /**
     * The library of the given circulation desk or department where the resources are located. Mandatory.
     */
    library: string;
    /**
     * Limits the number of results. Optional. Valid values are 0-100. Default value: 10.
     */
    limit?: number;
    /**
     * The location code. Optional.
     */
    location?: string;
    /**
     * Offset of the results returned. Optional. Default value: 0, which means that the first results will be returned.
     */
    offset?: number;
    /**
     * The order in which to retrieve the results: location/call_number (default).
     */
    orderBy?: string;
    /**
     * The pickup institution. Optional.
     */
    pickupInst?: string;
    /**
     * Show printed results: Y/N. Optional.
     */
    printed?: string;
    /**
     * Show reported results: Y/N. Optional.
     */
    reported?: string;
}
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopyBaseStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Specific copy of resource in a specific location.
 */
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopy extends SpeakeasyBase {
    /**
     * Alternative call number.
     */
    alternativeCallNumber?: string;
    /**
     * The item's barcode.
     */
    barcode?: string;
    baseStatus?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopyBaseStatus;
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
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationHoldingId extends SpeakeasyBase {
    link?: string;
    value?: string;
}
/**
 * Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
 */
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationLibrary extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Location of the requested resource.
 */
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocation extends SpeakeasyBase {
    /**
     * Call number of the item.
     */
    callNumber?: string;
    /**
     * Copies of resource in a specific location.
     */
    copy?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopy[];
    /**
     * Holding pid, a unique holding id that the resource is associated with.
     */
    holdingId?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationHoldingId;
    /**
     * Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
     */
    library?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationLibrary;
    /**
     * The location.
     */
    shelvingLocation?: string;
}
/**
 * The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
 */
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestDestination extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The sub type of the request.
 */
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestSubType extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
export declare enum GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnum {
    Booking = "BOOKING",
    Digitization = "DIGITIZATION",
    Hold = "HOLD",
    Move = "MOVE",
    WorkOrder = "WORK_ORDER"
}
/**
 * A description of the requester.
 */
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequester extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Request object.
 */
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequest extends SpeakeasyBase {
    /**
     * The related note of the request.
     */
    comment?: string;
    /**
     * The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
     */
    destination?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestDestination;
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
    requestSubType?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestSubType;
    /**
     * The creation date and exact time of the request. Output parameter.
     */
    requestTime?: Date;
    requestType: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnum;
    /**
     * A description of the requester.
     */
    requester?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequester;
}
/**
 * The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
 */
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadataMmsId extends SpeakeasyBase {
    link?: string;
    value?: string;
}
/**
 * Metadata about the requested resource.
 */
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadata extends SpeakeasyBase {
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
    mmsId?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadataMmsId;
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
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResource extends SpeakeasyBase {
    /**
     * Location of the requested resource.
     */
    location?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocation;
    /**
     * Requests for resource.
     */
    request?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequest[];
    /**
     * Metadata about the requested resource.
     */
    resourceMetadata?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadata;
}
/**
 * A list of requested resources.
 */
export declare class GetAlmawsV1TaskListsRequestedResources200ApplicationJSON extends SpeakeasyBase {
    /**
     * Requested resource object.
     */
    requestedResource?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResource[];
    /**
     * The total number of requested resources.
     */
    totalRecordCount?: number;
}
export declare class GetAlmawsV1TaskListsRequestedResourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK - This method returns an object based on rest_requested_resources.xsd. See [here](/alma/apis/docs/xsd/rest_requested_resources.xsd)
     */
    getAlmawsV1TaskListsRequestedResources200ApplicationJSONObject?: GetAlmawsV1TaskListsRequestedResources200ApplicationJSON;
}
