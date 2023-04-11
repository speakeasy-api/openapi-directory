import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchBinIdRequest extends SpeakeasyBase {
    id: string;
}
export declare class PatchBinIdResponse extends SpeakeasyBase {
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
