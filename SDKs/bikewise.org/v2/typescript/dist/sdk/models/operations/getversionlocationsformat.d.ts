import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * <p>Only incidents of specific type</p>
 *
 * @remarks
 *
 */
export declare enum GETVersionLocationsFormatIncidentTypeEnum {
    Crash = "crash",
    Hazard = "hazard",
    Theft = "theft",
    Unconfirmed = "unconfirmed",
    InfrastructureIssue = "infrastructure_issue",
    ChopShop = "chop_shop"
}
export declare class GETVersionLocationsFormatRequest extends SpeakeasyBase {
    /**
     * <p>Give ‘em all to me. Will ignore limit</p>
     *
     * @remarks
     *
     */
    all?: boolean;
    /**
     * <p>Only incidents of specific type</p>
     *
     * @remarks
     *
     */
    incidentType?: GETVersionLocationsFormatIncidentTypeEnum;
    /**
     * <p>Max number of results to return. Defaults to 100</p>
     *
     * @remarks
     *
     */
    limit?: number;
    /**
     * <p>Start of period</p>
     *
     * @remarks
     *
     */
    occurredAfter?: number;
    /**
     * <p>End of period</p>
     *
     * @remarks
     *
     */
    occurredBefore?: number;
    /**
     * <p>Center of location for proximity search</p>
     *
     * @remarks
     *
     */
    proximity?: string;
    /**
     * <p>Size of the proximity search</p>
     *
     * @remarks
     *
     */
    proximitySquare?: number;
    /**
     * <p>Full text search of incidents</p>
     *
     * @remarks
     *
     */
    query?: string;
}
export declare class GETVersionLocationsFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
