import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportTableXAmzTargetEnum {
    DynamoDB20120810ImportTable = "DynamoDB_20120810.ImportTable"
}
export declare class ImportTableRequest extends SpeakeasyBase {
    importTableInput: shared.ImportTableInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportTableXAmzTargetEnum;
}
export declare class ImportTableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ImportConflictException
     */
    importConflictException?: any;
    /**
     * Success
     */
    importTableOutput?: shared.ImportTableOutput;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
