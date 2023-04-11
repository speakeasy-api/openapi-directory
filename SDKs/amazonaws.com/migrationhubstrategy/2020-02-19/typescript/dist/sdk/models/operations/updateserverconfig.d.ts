import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Information about all the available strategy options for migrating and modernizing an application component.
 */
export declare class UpdateServerConfigRequestBodyStrategyOption extends SpeakeasyBase {
    isPreferred?: boolean;
    strategy?: shared.StrategyEnum;
    targetDestination?: shared.TargetDestinationEnum;
    toolName?: shared.TransformationToolNameEnum;
}
export declare class UpdateServerConfigRequestBody extends SpeakeasyBase {
    /**
     *  The ID of the server.
     */
    serverId: string;
    /**
     *  Information about all the available strategy options for migrating and modernizing an application component.
     */
    strategyOption?: UpdateServerConfigRequestBodyStrategyOption;
}
export declare class UpdateServerConfigRequest extends SpeakeasyBase {
    requestBody: UpdateServerConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateServerConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateServerConfigResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
