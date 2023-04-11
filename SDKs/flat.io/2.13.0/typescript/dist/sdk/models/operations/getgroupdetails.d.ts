import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupDetailsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetGroupDetailsRequest extends SpeakeasyBase {
    /**
     * Unique identifier of a Flat group
     *
     * @remarks
     *
     */
    group: string;
}
export declare class GetGroupDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * The group details
     */
    groupDetails?: shared.GroupDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
