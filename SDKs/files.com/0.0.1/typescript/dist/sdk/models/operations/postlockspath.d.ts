import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostLocksPathRequestBody extends SpeakeasyBase {
    /**
     * Allow lock to be updated by any user?
     */
    allowAccessByAnyUser?: boolean;
    /**
     * Is lock exclusive?
     */
    exclusive?: boolean;
    /**
     * Does lock apply to subfolders?
     */
    recursive?: string;
    /**
     * Lock timeout length
     */
    timeout?: number;
}
export declare class PostLocksPathRequest extends SpeakeasyBase {
    requestBody?: PostLocksPathRequestBody;
    /**
     * Path
     */
    path: string;
}
export declare class PostLocksPathResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Locks object.
     */
    lockEntity?: shared.LockEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
