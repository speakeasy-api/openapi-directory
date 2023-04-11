import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteWorkGroupXAmzTargetEnum {
    AmazonAthenaDeleteWorkGroup = "AmazonAthena.DeleteWorkGroup"
}
export declare class DeleteWorkGroupRequest extends SpeakeasyBase {
    deleteWorkGroupInput: shared.DeleteWorkGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkGroupXAmzTargetEnum;
}
export declare class DeleteWorkGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteWorkGroupOutput?: Record<string, any>;
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
