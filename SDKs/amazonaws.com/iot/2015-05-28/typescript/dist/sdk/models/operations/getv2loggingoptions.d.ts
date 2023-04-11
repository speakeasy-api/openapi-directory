import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2LoggingOptionsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetV2LoggingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getV2LoggingOptionsResponse?: shared.GetV2LoggingOptionsResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * NotConfiguredException
     */
    notConfiguredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
