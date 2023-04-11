import { SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoDatapointsTrackingLinkSpecifics } from "./apicoredtodatapointstrackinglinkspecifics";
import { ApiCoreDtoDatapointsTrackingPixelSpecifics } from "./apicoredtodatapointstrackingpixelspecifics";
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";
export declare enum ApiCoreDtoDatapointsDatapointStatusEnum {
    Active = "Active",
    Paused = "Paused",
    Abuse = "Abuse",
    Deleted = "Deleted"
}
export declare enum ApiCoreDtoDatapointsDatapointTypeEnum {
    TrackingLink = "TrackingLink",
    TrackingPixel = "TrackingPixel"
}
/**
 * The body of the datapoint
 */
export declare class ApiCoreDtoDatapointsDatapoint extends SpeakeasyBase {
    /**
     *  (A date in "YmdHis" format)
     */
    creationDate?: string;
    encodeIp?: boolean;
    fifthConversionId?: number;
    fifthConversionName?: string;
    firstConversionId?: number;
    firstConversionName?: string;
    fourthConversionId?: number;
    fourthConversionName?: string;
    groupId?: number;
    groupName?: string;
    id?: number;
    isPublic?: boolean;
    isSecured?: boolean;
    lightTracking?: boolean;
    name?: string;
    notes?: string;
    preferred?: boolean;
    redirectOnly?: boolean;
    secondConversionId?: number;
    secondConversionName?: string;
    status?: ApiCoreDtoDatapointsDatapointStatusEnum;
    tags?: ApiCoreDtoTagsTag[];
    thirdConversionId?: number;
    thirdConversionName?: string;
    title?: string;
    trackingCode?: string;
    type?: ApiCoreDtoDatapointsDatapointTypeEnum;
    typeTL?: ApiCoreDtoDatapointsTrackingLinkSpecifics;
    typeTP?: ApiCoreDtoDatapointsTrackingPixelSpecifics;
    writePermited?: boolean;
}
