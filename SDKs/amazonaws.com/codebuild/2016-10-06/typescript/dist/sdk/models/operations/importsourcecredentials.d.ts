import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportSourceCredentialsXAmzTargetEnum {
    CodeBuild20161006ImportSourceCredentials = "CodeBuild_20161006.ImportSourceCredentials"
}
export declare class ImportSourceCredentialsRequest extends SpeakeasyBase {
    importSourceCredentialsInput: shared.ImportSourceCredentialsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportSourceCredentialsXAmzTargetEnum;
}
export declare class ImportSourceCredentialsResponse extends SpeakeasyBase {
    /**
     * AccountLimitExceededException
     */
    accountLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    importSourceCredentialsOutput?: shared.ImportSourceCredentialsOutput;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
}
