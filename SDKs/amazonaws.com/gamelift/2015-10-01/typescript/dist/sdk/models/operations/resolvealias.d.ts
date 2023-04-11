import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResolveAliasXAmzTargetEnum {
    GameLiftResolveAlias = "GameLift.ResolveAlias"
}
export declare class ResolveAliasRequest extends SpeakeasyBase {
    resolveAliasInput: shared.ResolveAliasInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResolveAliasXAmzTargetEnum;
}
export declare class ResolveAliasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    resolveAliasOutput?: shared.ResolveAliasOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TerminalRoutingStrategyException
     */
    terminalRoutingStrategyException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
