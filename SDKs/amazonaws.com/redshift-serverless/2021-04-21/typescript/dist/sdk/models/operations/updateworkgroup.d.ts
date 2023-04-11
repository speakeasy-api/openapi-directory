import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateWorkgroupXAmzTargetEnum {
    RedshiftServerlessUpdateWorkgroup = "RedshiftServerless.UpdateWorkgroup"
}
export declare class UpdateWorkgroupRequest extends SpeakeasyBase {
    updateWorkgroupRequest: shared.UpdateWorkgroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkgroupXAmzTargetEnum;
}
export declare class UpdateWorkgroupResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InsufficientCapacityException
     */
    insufficientCapacityException?: any;
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
    updateWorkgroupResponse?: shared.UpdateWorkgroupResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
