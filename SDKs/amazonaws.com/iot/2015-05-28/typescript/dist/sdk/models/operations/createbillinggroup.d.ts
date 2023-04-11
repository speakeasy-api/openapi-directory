import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The properties of a billing group.
 */
export declare class CreateBillingGroupRequestBodyBillingGroupProperties extends SpeakeasyBase {
    billingGroupDescription?: string;
}
export declare class CreateBillingGroupRequestBody extends SpeakeasyBase {
    /**
     * The properties of a billing group.
     */
    billingGroupProperties?: CreateBillingGroupRequestBodyBillingGroupProperties;
    /**
     * Metadata which can be used to manage the billing group.
     */
    tags?: shared.Tag[];
}
export declare class CreateBillingGroupRequest extends SpeakeasyBase {
    requestBody: CreateBillingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name you wish to give to the billing group.
     */
    billingGroupName: string;
}
export declare class CreateBillingGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createBillingGroupResponse?: shared.CreateBillingGroupResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
