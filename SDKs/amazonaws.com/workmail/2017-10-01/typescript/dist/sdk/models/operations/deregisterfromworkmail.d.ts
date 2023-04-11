import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterFromWorkMailXAmzTargetEnum {
    WorkMailServiceDeregisterFromWorkMail = "WorkMailService.DeregisterFromWorkMail"
}
export declare class DeregisterFromWorkMailRequest extends SpeakeasyBase {
    deregisterFromWorkMailRequest: shared.DeregisterFromWorkMailRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterFromWorkMailXAmzTargetEnum;
}
export declare class DeregisterFromWorkMailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deregisterFromWorkMailResponse?: Record<string, any>;
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
