import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateOpsItemRelatedItemXAmzTargetEnum {
    AmazonSSMAssociateOpsItemRelatedItem = "AmazonSSM.AssociateOpsItemRelatedItem"
}
export declare class AssociateOpsItemRelatedItemRequest extends SpeakeasyBase {
    associateOpsItemRelatedItemRequest: shared.AssociateOpsItemRelatedItemRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateOpsItemRelatedItemXAmzTargetEnum;
}
export declare class AssociateOpsItemRelatedItemResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateOpsItemRelatedItemResponse?: shared.AssociateOpsItemRelatedItemResponse;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
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
    /**
     * OpsItemRelatedItemAlreadyExistsException
     */
    opsItemRelatedItemAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
