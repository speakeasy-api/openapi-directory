import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An invalidation batch.
 */
export declare class CreateInvalidation20181105RequestBodyInvalidationBatch extends SpeakeasyBase {
    callerReference?: string;
    paths?: shared.Paths;
}
export declare class CreateInvalidation20181105RequestBody extends SpeakeasyBase {
    /**
     * An invalidation batch.
     */
    invalidationBatch: CreateInvalidation20181105RequestBodyInvalidationBatch;
}
export declare class CreateInvalidation20181105Request extends SpeakeasyBase {
    /**
     * The distribution's id.
     */
    distributionId: string;
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateInvalidation20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
