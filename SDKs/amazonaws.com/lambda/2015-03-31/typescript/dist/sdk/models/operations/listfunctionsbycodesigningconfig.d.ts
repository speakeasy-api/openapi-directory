import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListFunctionsByCodeSigningConfigRequest extends SpeakeasyBase {
    /**
     * The The Amazon Resource Name (ARN) of the code signing configuration.
     */
    codeSigningConfigArn: string;
    /**
     * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
     */
    marker?: string;
    /**
     * Maximum number of items to return.
     */
    maxItems?: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctionsByCodeSigningConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    listFunctionsByCodeSigningConfigResponse?: shared.ListFunctionsByCodeSigningConfigResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
