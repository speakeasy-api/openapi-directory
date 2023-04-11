import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCliTokenRequest extends SpeakeasyBase {
    /**
     * The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.
     */
    name: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCliTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCliTokenResponse?: shared.CreateCliTokenResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
