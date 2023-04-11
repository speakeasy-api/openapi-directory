import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.
     */
    autoEnable?: boolean;
    /**
     * The ARN of the organization behavior graph.
     */
    graphArn: string;
}
export declare class UpdateOrganizationConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateOrganizationConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateOrganizationConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
