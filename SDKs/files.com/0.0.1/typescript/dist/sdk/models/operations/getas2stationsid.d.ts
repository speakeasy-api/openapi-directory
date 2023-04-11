import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAs2StationsIdRequest extends SpeakeasyBase {
    /**
     * As2 Station ID.
     */
    id: number;
}
export declare class GetAs2StationsIdResponse extends SpeakeasyBase {
    /**
     * The As2Stations object.
     */
    as2StationEntity?: shared.As2StationEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
