import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
 */
export declare enum GetFunction20200531StageEnum {
    Development = "DEVELOPMENT",
    Live = "LIVE"
}
export declare class GetFunction20200531Request extends SpeakeasyBase {
    /**
     * The name of the function whose code you are getting.
     */
    name: string;
    /**
     * The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
     */
    stage?: GetFunction20200531StageEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunction20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
