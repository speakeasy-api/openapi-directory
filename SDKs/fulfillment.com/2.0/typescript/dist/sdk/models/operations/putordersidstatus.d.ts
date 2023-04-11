import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutOrdersIdStatusSecurity extends SpeakeasyBase {
    fdcAuth: string;
}
export declare class PutOrdersIdStatusStatusTypeSimpleV2Status extends SpeakeasyBase {
    code: string;
}
/**
 * New status event
 */
export declare class PutOrdersIdStatusStatusTypeSimpleV2 extends SpeakeasyBase {
    /**
     * Human-readable description
     */
    reason: string;
    status: PutOrdersIdStatusStatusTypeSimpleV2Status;
}
export declare class PutOrdersIdStatusRequest extends SpeakeasyBase {
    /**
     * New status event
     */
    requestBody: PutOrdersIdStatusStatusTypeSimpleV2;
    /**
     * The FDC order Id
     */
    id: number;
}
export declare class PutOrdersIdStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Order Found
     */
    oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
