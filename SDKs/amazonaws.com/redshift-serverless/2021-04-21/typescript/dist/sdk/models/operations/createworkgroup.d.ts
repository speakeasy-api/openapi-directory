import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWorkgroupXAmzTargetEnum {
    RedshiftServerlessCreateWorkgroup = "RedshiftServerless.CreateWorkgroup"
}
export declare class CreateWorkgroupRequest extends SpeakeasyBase {
    createWorkgroupRequest: shared.CreateWorkgroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkgroupXAmzTargetEnum;
}
export declare class CreateWorkgroupResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createWorkgroupResponse?: shared.CreateWorkgroupResponse;
    /**
     * InsufficientCapacityException
     */
    insufficientCapacityException?: any;
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
     * TooManyTagsException
     */
    tooManyTagsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
