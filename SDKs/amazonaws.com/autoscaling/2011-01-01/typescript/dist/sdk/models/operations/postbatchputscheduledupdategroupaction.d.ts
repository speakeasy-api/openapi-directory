import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTBatchPutScheduledUpdateGroupActionActionEnum {
    BatchPutScheduledUpdateGroupAction = "BatchPutScheduledUpdateGroupAction"
}
export declare enum POSTBatchPutScheduledUpdateGroupActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTBatchPutScheduledUpdateGroupActionRequest extends SpeakeasyBase {
    action: POSTBatchPutScheduledUpdateGroupActionActionEnum;
    requestBody?: Uint8Array;
    version: POSTBatchPutScheduledUpdateGroupActionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTBatchPutScheduledUpdateGroupActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
