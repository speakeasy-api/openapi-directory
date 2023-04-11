import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetWorkGroupXAmzTargetEnum {
    AmazonAthenaGetWorkGroup = "AmazonAthena.GetWorkGroup"
}
export declare class GetWorkGroupRequest extends SpeakeasyBase {
    getWorkGroupInput: shared.GetWorkGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWorkGroupXAmzTargetEnum;
}
export declare class GetWorkGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getWorkGroupOutput?: shared.GetWorkGroupOutput;
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
