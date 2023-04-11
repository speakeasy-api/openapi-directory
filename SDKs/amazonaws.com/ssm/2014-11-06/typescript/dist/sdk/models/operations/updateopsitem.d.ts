import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateOpsItemXAmzTargetEnum {
    AmazonSSMUpdateOpsItem = "AmazonSSM.UpdateOpsItem"
}
export declare class UpdateOpsItemRequest extends SpeakeasyBase {
    updateOpsItemRequest: shared.UpdateOpsItemRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateOpsItemXAmzTargetEnum;
}
export declare class UpdateOpsItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * OpsItemAccessDeniedException
     */
    opsItemAccessDeniedException?: any;
    /**
     * OpsItemAlreadyExistsException
     */
    opsItemAlreadyExistsException?: any;
    /**
     * OpsItemInvalidParameterException
     */
    opsItemInvalidParameterException?: any;
    /**
     * OpsItemLimitExceededException
     */
    opsItemLimitExceededException?: any;
    /**
     * OpsItemNotFoundException
     */
    opsItemNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateOpsItemResponse?: Record<string, any>;
}
