import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCodeSigningConfigRequest extends SpeakeasyBase {
    /**
     * The The Amazon Resource Name (ARN) of the code signing configuration.
     */
    codeSigningConfigArn: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCodeSigningConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCodeSigningConfigResponse?: shared.GetCodeSigningConfigResponse;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
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
