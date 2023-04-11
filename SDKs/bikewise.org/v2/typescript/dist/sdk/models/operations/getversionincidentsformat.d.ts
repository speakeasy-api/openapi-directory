import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * <p>Only incidents of specific type</p>
 *
 * @remarks
 *
 */
export declare enum GETVersionIncidentsFormatIncidentTypeEnum {
    Crash = "crash",
    Hazard = "hazard",
    Theft = "theft",
    Unconfirmed = "unconfirmed",
    InfrastructureIssue = "infrastructure_issue",
    ChopShop = "chop_shop"
}
export declare class GETVersionIncidentsFormatRequest extends SpeakeasyBase {
    /**
     * <p>Only incidents of specific type</p>
     *
     * @remarks
     *
     */
    incidentType?: GETVersionIncidentsFormatIncidentTypeEnum;
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
     * <p>Page of results to fetch.</p>
     *
     * @remarks
     *
     */
    page?: number;
    /**
     * <p>Number of results to return per page.</p>
     *
     * @remarks
     *
     */
    perPage?: number;
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
export declare class GETVersionIncidentsFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
