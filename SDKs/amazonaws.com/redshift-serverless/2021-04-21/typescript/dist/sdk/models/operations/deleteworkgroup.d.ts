import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteWorkgroupXAmzTargetEnum {
    RedshiftServerlessDeleteWorkgroup = "RedshiftServerless.DeleteWorkgroup"
}
export declare class DeleteWorkgroupRequest extends SpeakeasyBase {
    deleteWorkgroupRequest: shared.DeleteWorkgroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkgroupXAmzTargetEnum;
}
export declare class DeleteWorkgroupResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteWorkgroupResponse?: shared.DeleteWorkgroupResponse;
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
     * ValidationException
     */
    validationException?: any;
}
