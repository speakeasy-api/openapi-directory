import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutBinIdRequest extends SpeakeasyBase {
    id: string;
}
export declare class PutBinIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Wrong security key
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bin data updated
     */
    updateStatus?: shared.UpdateStatus;
}
