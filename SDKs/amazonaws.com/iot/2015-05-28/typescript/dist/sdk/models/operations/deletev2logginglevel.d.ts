import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
 */
export declare enum DeleteV2LoggingLevelTargetTypeEnum {
    Default = "DEFAULT",
    ThingGroup = "THING_GROUP",
    ClientId = "CLIENT_ID",
    SourceIp = "SOURCE_IP",
    PrincipalId = "PRINCIPAL_ID"
}
export declare class DeleteV2LoggingLevelRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the resource for which you are configuring logging.
     */
    targetName: string;
    /**
     * The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
     */
    targetType: DeleteV2LoggingLevelTargetTypeEnum;
}
export declare class DeleteV2LoggingLevelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
