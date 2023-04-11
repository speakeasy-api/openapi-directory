import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateOpsItemXAmzTargetEnum {
    AmazonSSMCreateOpsItem = "AmazonSSM.CreateOpsItem"
}
export declare class CreateOpsItemRequest extends SpeakeasyBase {
    createOpsItemRequest: shared.CreateOpsItemRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateOpsItemXAmzTargetEnum;
}
export declare class CreateOpsItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createOpsItemResponse?: shared.CreateOpsItemResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
