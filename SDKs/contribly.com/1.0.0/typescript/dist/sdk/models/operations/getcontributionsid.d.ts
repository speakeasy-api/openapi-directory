import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContributionsIdRequest extends SpeakeasyBase {
    /**
     * Id of the contribution to return
     */
    id: string;
}
export declare class GetContributionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful
     */
    contribution?: shared.Contribution;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
