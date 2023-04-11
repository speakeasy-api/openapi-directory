import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOpsItemXAmzTargetEnum {
    AmazonSSMGetOpsItem = "AmazonSSM.GetOpsItem"
}
export declare class GetOpsItemRequest extends SpeakeasyBase {
    getOpsItemRequest: shared.GetOpsItemRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOpsItemXAmzTargetEnum;
}
export declare class GetOpsItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getOpsItemResponse?: shared.GetOpsItemResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * OpsItemAccessDeniedException
     */
    opsItemAccessDeniedException?: any;
    /**
     * OpsItemNotFoundException
     */
    opsItemNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
