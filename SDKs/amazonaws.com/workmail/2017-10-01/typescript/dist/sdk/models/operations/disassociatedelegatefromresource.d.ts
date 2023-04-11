import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateDelegateFromResourceXAmzTargetEnum {
    WorkMailServiceDisassociateDelegateFromResource = "WorkMailService.DisassociateDelegateFromResource"
}
export declare class DisassociateDelegateFromResourceRequest extends SpeakeasyBase {
    disassociateDelegateFromResourceRequest: shared.DisassociateDelegateFromResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateDelegateFromResourceXAmzTargetEnum;
}
export declare class DisassociateDelegateFromResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateDelegateFromResourceResponse?: Record<string, any>;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * EntityStateException
     */
    entityStateException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
