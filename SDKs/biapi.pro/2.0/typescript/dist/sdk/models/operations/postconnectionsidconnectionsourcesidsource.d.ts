import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostConnectionsIdConnectionSourcesIdSourceRequestBody extends SpeakeasyBase {
    /**
     * to enable or disable connector source
     */
    disabled?: boolean;
    /**
     * whether to force a synchronization on the source if it's not disabled
     */
    synchronize?: boolean;
}
export declare class PostConnectionsIdConnectionSourcesIdSourceRequest extends SpeakeasyBase {
    requestBody?: PostConnectionsIdConnectionSourcesIdSourceRequestBody;
    /**
     * do the synchronization in background (to use with the sysynchronizenc parameter)
     */
    background?: boolean;
    expand?: string;
    idConnection: number;
    idSource: number;
}
export declare class PostConnectionsIdConnectionSourcesIdSourceResponse extends SpeakeasyBase {
    /**
     * Successful POST on ConnectionSource resource
     */
    connectionSource?: shared.ConnectionSource;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
