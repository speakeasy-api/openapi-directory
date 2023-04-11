import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostContributionsIdFlagRequest extends SpeakeasyBase {
    /**
     * Flag to be created
     */
    flag: shared.Flag;
    /**
     * Id of the contribution to flag
     */
    id: string;
}
export declare class PostContributionsIdFlagResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Flag created
     */
    flag?: shared.Flag;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
