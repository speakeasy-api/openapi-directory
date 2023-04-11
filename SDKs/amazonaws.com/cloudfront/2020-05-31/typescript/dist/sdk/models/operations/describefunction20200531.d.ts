import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
 */
export declare enum DescribeFunction20200531StageEnum {
    Development = "DEVELOPMENT",
    Live = "LIVE"
}
export declare class DescribeFunction20200531Request extends SpeakeasyBase {
    /**
     * The name of the function that you are getting information about.
     */
    name: string;
    /**
     * The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
     */
    stage?: DescribeFunction20200531StageEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFunction20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
