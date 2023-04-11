import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateWorkGroupXAmzTargetEnum {
    AmazonAthenaUpdateWorkGroup = "AmazonAthena.UpdateWorkGroup"
}
export declare class UpdateWorkGroupRequest extends SpeakeasyBase {
    updateWorkGroupInput: shared.UpdateWorkGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkGroupXAmzTargetEnum;
}
export declare class UpdateWorkGroupResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    updateWorkGroupOutput?: Record<string, any>;
}
