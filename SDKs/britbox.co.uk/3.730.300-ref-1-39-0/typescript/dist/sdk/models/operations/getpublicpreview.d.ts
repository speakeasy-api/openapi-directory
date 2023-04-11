import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPublicPreviewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The samsung public preview requested.
     */
    samsungPreview?: shared.SamsungPreview;
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
