import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNFLPositionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    draftPositions?: shared.DraftPosition[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
