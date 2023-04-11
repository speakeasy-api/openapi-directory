import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListBackupsXAmzTargetEnum {
    DynamoDB20120810ListBackups = "DynamoDB_20120810.ListBackups"
}
export declare class ListBackupsRequest extends SpeakeasyBase {
    listBackupsInput: shared.ListBackupsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBackupsXAmzTargetEnum;
}
export declare class ListBackupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    listBackupsOutput?: shared.ListBackupsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
