import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSourceCredentialsXAmzTargetEnum {
    CodeBuild20161006ListSourceCredentials = "CodeBuild_20161006.ListSourceCredentials"
}
export declare class ListSourceCredentialsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSourceCredentialsXAmzTargetEnum;
}
export declare class ListSourceCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listSourceCredentialsOutput?: shared.ListSourceCredentialsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
