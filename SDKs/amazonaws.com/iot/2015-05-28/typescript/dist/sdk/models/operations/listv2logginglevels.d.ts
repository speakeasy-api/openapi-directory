import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
 */
export declare enum ListV2LoggingLevelsTargetTypeEnum {
    Default = "DEFAULT",
    ThingGroup = "THING_GROUP",
    ClientId = "CLIENT_ID",
    SourceIp = "SOURCE_IP",
    PrincipalId = "PRINCIPAL_ID"
}
export declare class ListV2LoggingLevelsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: number;
    /**
     * To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
     */
    nextToken?: string;
    /**
     * The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
     */
    targetType?: ListV2LoggingLevelsTargetTypeEnum;
}
export declare class ListV2LoggingLevelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listV2LoggingLevelsResponse?: shared.ListV2LoggingLevelsResponse;
    /**
     * NotConfiguredException
     */
    notConfiguredException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
