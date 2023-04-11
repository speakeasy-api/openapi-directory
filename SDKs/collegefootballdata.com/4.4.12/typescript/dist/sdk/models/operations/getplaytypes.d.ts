import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlayTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    playTypes?: shared.PlayType[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
