import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EstimationApiStatusRequest extends SpeakeasyBase {
    id: number;
    xAuthKey: string;
    xAuthSecret: string;
}
/**
 * OK
 */
export declare enum EstimationApiStatus200TextJSONEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
/**
 * OK
 */
export declare enum EstimationApiStatus200ApplicationXMLEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
/**
 * OK
 */
export declare enum EstimationApiStatus200ApplicationJSONEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
export declare class EstimationApiStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationApiStatus200ApplicationJSONStringEnum?: EstimationApiStatus200ApplicationJSONEnum;
    /**
     * OK
     */
    estimationApiStatus200TextJSONStringEnum?: EstimationApiStatus200TextJSONEnum;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
