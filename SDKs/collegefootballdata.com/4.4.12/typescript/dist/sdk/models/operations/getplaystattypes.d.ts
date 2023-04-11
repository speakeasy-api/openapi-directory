import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlayStatTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    playStatTypes?: shared.PlayStatType[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
