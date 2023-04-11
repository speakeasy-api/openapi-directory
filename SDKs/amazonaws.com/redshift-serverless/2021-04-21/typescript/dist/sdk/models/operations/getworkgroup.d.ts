import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetWorkgroupXAmzTargetEnum {
    RedshiftServerlessGetWorkgroup = "RedshiftServerless.GetWorkgroup"
}
export declare class GetWorkgroupRequest extends SpeakeasyBase {
    getWorkgroupRequest: shared.GetWorkgroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWorkgroupXAmzTargetEnum;
}
export declare class GetWorkgroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getWorkgroupResponse?: shared.GetWorkgroupResponse;
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
