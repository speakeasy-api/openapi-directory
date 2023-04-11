import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateOrganizationXAmzTargetEnum {
    WorkMailServiceCreateOrganization = "WorkMailService.CreateOrganization"
}
export declare class CreateOrganizationRequest extends SpeakeasyBase {
    createOrganizationRequest: shared.CreateOrganizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateOrganizationXAmzTargetEnum;
}
export declare class CreateOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createOrganizationResponse?: shared.CreateOrganizationResponse;
    /**
     * DirectoryInUseException
     */
    directoryInUseException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NameAvailabilityException
     */
    nameAvailabilityException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
