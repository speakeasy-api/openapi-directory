import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GrantAccessXAmzTargetEnum {
    OpsWorks20130218GrantAccess = "OpsWorks_20130218.GrantAccess"
}
export declare class GrantAccessRequest extends SpeakeasyBase {
    grantAccessRequest: shared.GrantAccessRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GrantAccessXAmzTargetEnum;
}
export declare class GrantAccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    grantAccessResult?: shared.GrantAccessResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
