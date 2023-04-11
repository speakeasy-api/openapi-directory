import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateOpsItemRelatedItemXAmzTargetEnum {
    AmazonSSMDisassociateOpsItemRelatedItem = "AmazonSSM.DisassociateOpsItemRelatedItem"
}
export declare class DisassociateOpsItemRelatedItemRequest extends SpeakeasyBase {
    disassociateOpsItemRelatedItemRequest: shared.DisassociateOpsItemRelatedItemRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateOpsItemRelatedItemXAmzTargetEnum;
}
export declare class DisassociateOpsItemRelatedItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateOpsItemRelatedItemResponse?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * OpsItemInvalidParameterException
     */
    opsItemInvalidParameterException?: any;
    /**
     * OpsItemNotFoundException
     */
    opsItemNotFoundException?: any;
    /**
     * OpsItemRelatedItemAssociationNotFoundException
     */
    opsItemRelatedItemAssociationNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
