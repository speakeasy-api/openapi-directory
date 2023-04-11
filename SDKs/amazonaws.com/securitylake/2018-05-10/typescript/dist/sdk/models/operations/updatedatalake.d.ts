import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDatalakeRequestBody extends SpeakeasyBase {
    /**
     * Specify the Region or Regions that will contribute data to the rollup region.
     */
    configurations: Record<string, shared.LakeConfigurationRequest>;
}
export declare class UpdateDatalakeRequest extends SpeakeasyBase {
    requestBody: UpdateDatalakeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDatalakeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * EventBridgeException
     */
    eventBridgeException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateDatalakeResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
