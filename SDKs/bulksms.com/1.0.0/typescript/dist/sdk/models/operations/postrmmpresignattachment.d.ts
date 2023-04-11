import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRmmPreSignAttachmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostRmmPreSignAttachmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A PreSignInfo object
     */
    preSignInfo?: shared.PreSignInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
