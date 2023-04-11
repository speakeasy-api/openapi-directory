import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteBinIdRequest extends SpeakeasyBase {
    id: string;
}
export declare class DeleteBinIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Status of the deletion
     */
    deleteStatus?: shared.DeleteStatus;
    /**
     * Wrong security key
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
