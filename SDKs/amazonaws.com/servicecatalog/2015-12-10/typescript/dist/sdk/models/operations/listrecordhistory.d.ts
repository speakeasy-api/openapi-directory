import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRecordHistoryXAmzTargetEnum {
    Aws242ServiceCatalogServiceListRecordHistory = "AWS242ServiceCatalogService.ListRecordHistory"
}
export declare class ListRecordHistoryRequest extends SpeakeasyBase {
    listRecordHistoryInput: shared.ListRecordHistoryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRecordHistoryXAmzTargetEnum;
}
export declare class ListRecordHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listRecordHistoryOutput?: shared.ListRecordHistoryOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
