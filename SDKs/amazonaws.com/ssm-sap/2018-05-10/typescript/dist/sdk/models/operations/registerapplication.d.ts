import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of the application.
 */
export declare enum RegisterApplicationRequestBodyApplicationTypeEnum {
    Hana = "HANA"
}
export declare class RegisterApplicationRequestBody extends SpeakeasyBase {
    /**
     * The ID of the application.
     */
    applicationId: string;
    /**
     * The type of the application.
     */
    applicationType: RegisterApplicationRequestBodyApplicationTypeEnum;
    /**
     * The credentials of the SAP application.
     */
    credentials: shared.ApplicationCredential[];
    /**
     * The Amazon EC2 instances on which your SAP application is running.
     */
    instances: string[];
    /**
     * The SAP instance number of the application.
     */
    sapInstanceNumber?: string;
    /**
     * The System ID of the application.
     */
    sid?: string;
    /**
     * The tags to be attached to the SAP application.
     */
    tags?: Record<string, string>;
}
export declare class RegisterApplicationRequest extends SpeakeasyBase {
    requestBody: RegisterApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterApplicationResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    registerApplicationOutput?: shared.RegisterApplicationOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
