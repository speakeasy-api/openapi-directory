import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWorkGroupXAmzTargetEnum {
    AmazonAthenaCreateWorkGroup = "AmazonAthena.CreateWorkGroup"
}
export declare class CreateWorkGroupRequest extends SpeakeasyBase {
    createWorkGroupInput: shared.CreateWorkGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkGroupXAmzTargetEnum;
}
export declare class CreateWorkGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWorkGroupOutput?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
